import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-extension',
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'extension/popup.html'),
        wallet: resolve(__dirname, 'extension/wallet.html'),
        background: resolve(__dirname, 'extension/background.ts'),
        content: resolve(__dirname, 'extension/content.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  // Copy extension files after build
  closeBundle() {
    const manifest = fs.readFileSync('extension/manifest.json', 'utf8');
    fs.writeFileSync('dist-extension/manifest.json', manifest);
    console.log('✓ Extension built to dist-extension/');
    console.log('  Load dist-extension/ as unpacked extension in Chrome/Edge.');
  },
});
