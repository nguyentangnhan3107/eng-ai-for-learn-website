import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages publishes this repository under /eng-ai-for-learn-website/
  base: '/eng-ai-for-learn-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          genai: ['@google/genai']
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
  }
});
