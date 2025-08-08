/**
 * CONFIG: https://vite.dev/config/
 */

import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    outDir: '../../searx/static/themes/ruserve',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'searxng': resolve(__dirname, 'src/less/style.less'),
        'searxng-rtl': resolve(__dirname, 'src/less/style-rtl.less'),
        'rss': resolve(__dirname, 'src/less/rss.less'),
        'searxng.head': resolve(__dirname, 'src/js/searxng.head.js'),
        'searxng': resolve(__dirname, 'src/js/searxng.js'),
      },
      output: {
        entryFileNames: 'js/[name].min.js',
        chunkFileNames: 'js/[name].min.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].min.css';
          }
          return '[name].[ext]';
        },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/img/*',
          dest: 'img',
        },
        {
          src: 'src/js/*.js',
          dest: 'js',
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@import "src/less/definitions.less";',
      },
    },
  },
});
