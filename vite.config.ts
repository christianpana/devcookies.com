import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { tanstackRouter } from '@tanstack/router-vite-plugin';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
  ],
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});

