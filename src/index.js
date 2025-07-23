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
      html2canvas(wrapper, { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'codeshoot.png';
        link.href = canvas.toDataURL();
        link.click();
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
