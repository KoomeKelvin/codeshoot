import './index.css';
import html2canvas from 'html2canvas';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

// Static scoped imports (you MUST scope them manually in the CSS files as explained)
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
  enableCopy = true
}) {
  if (!container) throw new Error("You must provide a container element.");

  const themeClass = themeMap[theme] || themeMap.default;

  if (!Prism.languages[language]) {
    try {
      loadLanguages([language]);
    } catch (err) {
      console.warn(`Language '${language}' could not be loaded`, err);
    }
  }

  const placeholderComment = '// Paste your code here to enjoy CodeShoot';
  const invisibleChar = '\u200B'; // zero-width space
  const isCodeEmpty = !code?.trim();

  container.innerHTML = `
    <div class="codephoto ${themeClass}">
      <div class="editor-wrapper" id="screenshotArea">
        <input type="text" id="titleInput" value="${title}" />
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
    // Enable double-click toggle between editing and selecting
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

        // Place cursor after invisible char
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

  setTimeout(updateHighlight, 100);

  if (enableDownload) {
    const btn = container.querySelector('#downloadBtn');
    btn?.addEventListener('click', () => {
      const wrapper = container.querySelector('#screenshotArea');
      const pre = container.querySelector('.highlighted-code');
      if (!wrapper || !pre) return;

      // Clone wrapper so user doesn’t see flicker
      const clone = wrapper.cloneNode(true);

      // Copy computed styles into clone to preserve themes + wrapper
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
      preClone.style.whiteSpace = "pre-wrap"; // wrap long lines so height expands
      preClone.style.wordBreak = "break-word"; // prevent overflow

      // Hide unwanted controls in screenshot
      const hiddenControls = clone.querySelectorAll('#downloadBtn, #copyBtn');
      hiddenControls.forEach(btn => btn.style.display = 'none');

      document.body.appendChild(clone);

      // Capture screenshot
      requestAnimationFrame(() => {
        html2canvas(clone, { scale: 2, backgroundColor: null }).then(canvas => {
          document.body.removeChild(clone); // cleanup

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
