import './index.css';
import html2canvas from 'html2canvas';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

import './themes/scoped/prism.css';
import './themes/scoped/prism-tomorrow.css';
import './themes/scoped/prism-dark.css';
import './themes/scoped/prism-funky.css';
import './themes/scoped/prism-okaidia.css';
import './themes/scoped/prism-solarizedlight.css';
import './themes/scoped/prism-twilight.css';
import './themes/scoped/prism-coy.css';

export const themeMap = {
  default: 'prism',
  tomorrow: 'prism-tomorrow',
  dark: 'prism-dark',
  funky: 'prism-funky',
  okaidia: 'prism-okaidia',
  solarized: 'prism-solarizedlight',
  twilight: 'prism-twilight',
  coy: 'prism-coy'
};

// ─── Ambient Background Helpers ──────────────────────────────

function getDominantColors(colorList, count = 3) {
  const frequency = {};
  colorList.forEach(color => {
    frequency[color] = (frequency[color] || 0) + 1;
  });
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([color]) => color);
}

function extractColorsFromHighlight(highlightedCodeEl) {
  const spans = highlightedCodeEl.querySelectorAll('span[class*="token"]');
  const colors = [];
  spans.forEach(span => {
    const color = window.getComputedStyle(span).color;
    // Filter out black, white, and transparent — they make bad gradients
    if (
      color &&
      color !== 'rgba(0, 0, 0, 0)' &&
      color !== 'rgb(0, 0, 0)' &&
      color !== 'rgb(255, 255, 255)'
    ) {
      colors.push(color);
    }
  });
  return getDominantColors(colors, 3);
}

function applyAmbientBackground(codephotoEl, colors) {
  const [c1, c2, c3] = colors;
  if (!c1) return; // no colors extracted, leave default background

  codephotoEl.style.background = `
    radial-gradient(ellipse at top left, ${c1}40 0%, transparent 60%),
    radial-gradient(ellipse at bottom right, ${c2 || c1}40 0%, transparent 60%),
    radial-gradient(ellipse at center, ${c3 || c1}25 0%, transparent 70%),
    #0d0d0d
  `;
}

// ─────────────────────────────────────────────────────────────

export function createCodeShot({
  code,
  language = 'javascript',
  title = 'devsip',
  theme,
  container,
  enableDownload = true,
  enableFocus = true,
  enableInput = true,
  enablePaste = true,
  enableCopy = true,
  fontFamily = "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Courier New', monospace",
  fontSize = '14px',
  ambientBackground = false  // 👈 new option
}) {
  if (!container) throw new Error("You must provide a container element.");

  container.style.setProperty('--font-mono', fontFamily);
  container.style.setProperty('--font-size', fontSize);

  const themeClass = themeMap[theme] || themeMap.default;

  if (!Prism.languages[language]) {
    try {
      loadLanguages([language]);
    } catch (err) {
      console.warn(`Language '${language}' could not be loaded`, err);
    }
  }

  const placeholderComment = '// Paste your code here to enjoy CodeShoot';
  const invisibleChar = '\u200B';
  const isCodeEmpty = !code?.trim();

  const safeTitle = title.replace(/"/g, '&quot;').replace(/</g, '&lt;');

  container.innerHTML = `
    <div class="codephoto ${themeClass}">
      <div class="editor-wrapper" id="screenshotArea">
        <input type="text" id="titleInput" value="${safeTitle}" />
        <pre class="highlighted-code"><code id="highlightedCode" class="language-${language}"></code></pre>
        <textarea id="codeInput" spellcheck="false">${isCodeEmpty ? placeholderComment : code}</textarea>
      </div>
      <div style="margin-top: 1rem;">
        ${enableDownload ? `<button id="downloadBtn">Download Code Screenshot</button>` : ''}
        ${enableCopy ? `<button id="copyBtn">Copy Code</button>` : ''}
      </div>
    </div>
  `;

  const textarea = container.querySelector('#codeInput');
  const highlightedCode = container.querySelector('#highlightedCode');
  const wrapper = container.querySelector('#screenshotArea');
  const codephotoEl = container.querySelector('.codephoto'); // 👈 needed for ambient bg

  wrapper.classList.add('editing');
  wrapper.addEventListener('dblclick', () => {
    wrapper.classList.toggle('editing');
    wrapper.classList.toggle('selecting');
  });

  function updateHighlight() {
    let content = textarea.value;

    if (content === invisibleChar) {
      content = '';
    }

    highlightedCode.textContent = content || placeholderComment;
    highlightedCode.className = `language-${language}`;
    Prism.highlightElement(highlightedCode);

    // Apply ambient background after Prism colorizes the tokens
    if (ambientBackground) {
      requestAnimationFrame(() => {
        const colors = extractColorsFromHighlight(highlightedCode);
        applyAmbientBackground(codephotoEl, colors);
      });
    }

    requestAnimationFrame(() => {
      textarea.style.width = wrapper.clientWidth + 'px';
      textarea.style.height = wrapper.scrollHeight + 'px';
    });
  }

  if (enableFocus) {
    textarea.addEventListener('focus', () => {
      if (textarea.value.trim() === placeholderComment) {
        textarea.value = invisibleChar;
        updateHighlight();
        setTimeout(() => {
          textarea.setSelectionRange(1, 1);
        }, 0);
      }
    });
  }

  if (enablePaste) {
    textarea.addEventListener('paste', () => {
      requestAnimationFrame(updateHighlight);
    });
  }

  if (enableInput) {
    textarea.addEventListener('input', updateHighlight);
  }

  document.fonts.ready.then(() => {
    updateHighlight();
  });

  if (enableDownload) {
    const btn = container.querySelector('#downloadBtn');
    btn?.addEventListener('click', async () => {
      const wrapper = container.querySelector('#screenshotArea');
      const pre = container.querySelector('.highlighted-code');
      if (!wrapper || !pre) return;

      const clone = wrapper.cloneNode(true);

      const allElements = wrapper.querySelectorAll('*');
      const allClones = clone.querySelectorAll('*');
      allElements.forEach((el, i) => {
        const style = window.getComputedStyle(el);
        const target = allClones[i];
        for (let prop of style) {
          target.style[prop] = style.getPropertyValue(prop);
        }
      });

      // Carry ambient background into the screenshot
      if (ambientBackground) {
        clone.style.background = codephotoEl.style.background;
      }

      clone.style.position = "absolute";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      clone.style.zIndex = "-1";
      clone.style.width = "auto";
      clone.style.height = "auto";
      clone.style.overflow = "visible";

      const preClone = clone.querySelector('.highlighted-code');
      preClone.style.width = "auto";
      preClone.style.height = "auto";
      preClone.style.overflow = "visible";
      preClone.style.maxHeight = "none";
      preClone.style.whiteSpace = "pre-wrap";
      preClone.style.wordBreak = "break-word";

      clone.querySelectorAll('#downloadBtn, #copyBtn')
        .forEach(el => el.style.display = 'none');

      document.body.appendChild(clone);

      await document.fonts.ready;

      requestAnimationFrame(() => {
        html2canvas(clone, {
          scale: 2,
          backgroundColor: null,
          useCORS: true,
          allowTaint: false
        }).then(canvas => {
          document.body.removeChild(clone);

          const link = document.createElement('a');
          link.download = 'codeshoot.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      });
    });
  }

  if (enableCopy) {
    const copyBtn = container.querySelector('#copyBtn');
    copyBtn?.addEventListener('click', () => {
      navigator.clipboard.writeText(highlightedCode.textContent)
        .then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        })
        .catch(err => console.error("Copy failed", err));
    });
  }
}