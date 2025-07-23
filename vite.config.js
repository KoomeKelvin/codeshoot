import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/themes/*.css',
          dest: 'themes',
        },
        {
          src: 'src/themes/scoped/*.css',  // Scoped themes
          dest: 'themes/scoped',           // Goes to dist/themes/scoped/
        }
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CodeShoot',
      fileName: 'codeshoot',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['html2canvas', 'prismjs'],
      output: {
        globals: {
          html2canvas: 'html2canvas',
          prismjs: 'Prism',
        },
      },
    },
  },
});
