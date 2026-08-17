import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,
    // GitHub Codespaces serves the dev server through a *.app.github.dev proxy.
    allowedHosts: ['.app.github.dev'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
