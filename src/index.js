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
  fontSize = '14px'
}) {
  if (!container) throw new Error("You must provide a container element.");

  // Apply font variables
  container.style.setProperty('--font-mono', fontFamily);
  container.style.setProperty('--font-size', fontSize);

  const themeClass = themeMap[theme] || themeMap.default;

  // Load language if not already available
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

  // Sanitize title to prevent XSS
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

  // Double-click to toggle between editing and selecting
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

  // Wait for fonts to load before first render
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

      // Copy computed styles to preserve themes in screenshot
      const allElements = wrapper.querySelectorAll('*');
      const allClones = clone.querySelectorAll('*');
      allElements.forEach((el, i) => {
        const style = window.getComputedStyle(el);
        const target = allClones[i];
        for (let prop of style) {
          target.style[prop] = style.getPropertyValue(prop);
        }
      });

      // Position clone off-screen
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

      // Hide controls from screenshot
      clone.querySelectorAll('#downloadBtn, #copyBtn')
        .forEach(el => el.style.display = 'none');

      document.body.appendChild(clone);

      // Ensure fonts are ready before capturing
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