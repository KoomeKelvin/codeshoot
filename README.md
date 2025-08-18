# 📸 codeshoot

> Turn code into beautiful, shareable images — directly in the browser, no framework needed.

**codeshoot** is a lightweight JavaScript package that allows users to paste source code and instantly generate a **screenshot-quality image** with syntax highlighting. It's perfect for:
- Sharing code on social media
- Creating blog visuals
- Embedding into portfolio sites

---

## 🚀 Features

- ✅ ** JavaScript** — Built in Javascript
- ✨ **Syntax highlighting** via [Prism.js](https://prismjs.com/)
- 🎨 Built-in dark theme (custom themes supported)
- 📝 Editable code input with real-time preview
- 🖼️ Export code snippet as a PNG image (via `html2canvas`)
- 🧩 Embeddable in any web page or custom tool

---

##  Installation

Install from NPM:

```bash
npm install codeshoot
```

## 🛠️ Usage  

### Import into your project:  

```js
import { createCodeShot } from 'codeshoot';
import 'codeshoot/dist/style.css';  // include styles
```


### initialize inside a container and:
#### replace object property values passed in createCodeShoot with yours

```js
createCodeShot({
  code: `console.log("Hello, world!");`,
  title: 'Devsip',
  language: 'javascript', 
  theme: 'solarized',  
  container: document.getElementById('app'),
  enableDownload: true,
  enableFocus: true,
  enableInput: true,
  enablePaste: true,
  enableCopy: true
});
```


### 🎨 Supported Languages

Out of the box, **codeshoot** supports syntax highlighting for:

- markup  
- bash  
- c  
- clike  
- cpp  
- csharp  
- css  
- dart  
- django  
- docker  
- git  
- go  
- graphql  
- java  
- json  
- jsx  
- kotlin  
- latex  
- makefile  
- markdown  
- matlab  
- objective-c  
- perl  
- php  
- javascript  
- r  
- ruby  
- rust  
- sass  
- scala  
- scss  
- sql  
- swift  
- tsx  
- typescript  
- vim  
- yaml  

## ☕ Support the Creator
If you like **codeshoot**, you can support me here:

👉 [**Buy me a coffee**](https://buymeacoffee.com/koome)