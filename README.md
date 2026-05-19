# 📸 codeshoot

> Turn code into beautiful, shareable images — directly in the browser, no framework needed.

**codeshoot** is a lightweight JavaScript package that allows users to paste source code and instantly generate a **screenshot-quality image** with syntax highlighting. It's perfect for:

- Sharing code on social media
- Creating blog visuals
- Embedding into portfolio sites

---

## 🚀 Features

- ✅ **Plain JavaScript** — No framework required
- ✨ **Syntax highlighting** via [Prism.js](https://prismjs.com/)
- 🎨 **8 built-in themes** — with custom theme support
- 🔤 **Custom fonts** — defaults to Fira Code, fully overridable
- 📝 **Editable code input** with real-time preview
- 🖼️ **Export as PNG** via `html2canvas`
- 🧩 **Embeddable** in any web page or custom tool

---

## Installation

```bash
npm install codeshoot
```

---

## 🛠️ Usage

### Import into your project:

```js
import { createCodeShot } from 'codeshoot';
import 'codeshoot/dist/style.css';
```

### Basic example:

```js
createCodeShot({
  code: `console.log("Hello, world!");`,
  title: 'My Snippet',
  language: 'javascript',
  theme: 'tomorrow',
  container: document.getElementById('app')
});
```

---

## ⚙️ Configuration

All options and their defaults:

| Option | Type | Default | Description |
|---|---|---|---|
| `code` | `string` | `''` | Code to display |
| `title` | `string` | `'devsip'` | Title shown above the code |
| `language` | `string` | `'javascript'` | Syntax highlighting language |
| `theme` | `string` | `'default'` | Color theme (see themes below) |
| `container` | `HTMLElement` | required | DOM element to render into |
| `fontFamily` | `string` | `'Fira Code, ...'` | Font stack for code display |
| `fontSize` | `string` | `'14px'` | Font size for code display |
| `enableDownload` | `boolean` | `true` | Show download button |
| `enableCopy` | `boolean` | `true` | Show copy button |
| `enableInput` | `boolean` | `true` | Allow typing in the editor |
| `enablePaste` | `boolean` | `true` | Allow pasting code |
| `enableFocus` | `boolean` | `true` | Clear placeholder on focus |

---

## 🎨 Themes

| Key | Preview |
|---|---|
| `default` | Light (Prism default) |
| `tomorrow` | Dark blue-grey |
| `dark` | High contrast dark |
| `funky` | Colorful light |
| `okaidia` | Monokai-inspired dark |
| `solarized` | Solarized light |
| `twilight` | Muted dark |
| `coy` | Light with shadows |

```js
createCodeShot({ theme: 'okaidia', ... });
```

---

## 🔤 Custom Fonts

By default, codeshoot uses **Fira Code** (loaded via Google Fonts) for ligature support and clean rendering. You can override this:

```js
createCodeShot({
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '13px',
  ambientBackground: true,
  ...
});
```

---

## 🌐 Supported Languages

`markup` `bash` `c` `clike` `cpp` `csharp` `css` `dart` `django` `docker`
`git` `go` `graphql` `java` `json` `jsx` `kotlin` `latex` `makefile`
`markdown` `matlab` `objective-c` `perl` `php` `javascript` `r` `ruby`
`rust` `sass` `scala` `scss` `sql` `swift` `tsx` `typescript` `vim` `yaml`

---

## ☕ Support the Creator

If you find codeshoot useful, consider buying me a coffee:

👉 [**Buy me a coffee**](https://buymeacoffee.com/koome)