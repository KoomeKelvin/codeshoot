// scope-themes.js
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const prefixSelector = require('postcss-prefix-selector');

// Theme filenames (without path)
const themes = [
  'prism.css',
  'prism-tomorrow.css',
  'prism-dark.css',
  'prism-funky.css',
  'prism-okaidia.css',
  'prism-solarizedlight.css',
  'prism-twilight.css',
  'prism-coy.css'
];

const inputDir = './src/themes';
const outputDir = './src/themes/scoped';

// Create output directory if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

themes.forEach(async (filename) => {
  const filePath = path.join(inputDir, filename);
  const scopedClass = `.${filename.replace('.css', '')}`;
  const outputPath = path.join(outputDir, filename);

  const css = fs.readFileSync(filePath, 'utf8');

  try {
    const result = await postcss([
      prefixSelector({
        prefix: scopedClass,
        transform: (prefix, selector, prefixedSelector) => {
          if (selector.startsWith('html') || selector.startsWith('body')) return selector;
          return prefixedSelector;
        }
      })
    ]).process(css, { from: filePath, to: outputPath });

    fs.writeFileSync(outputPath, result.css);
    console.log(`✅ Scoped: ${filename}`);
  } catch (err) {
    console.error(`❌ Failed to process ${filename}:`, err);
  }
});
