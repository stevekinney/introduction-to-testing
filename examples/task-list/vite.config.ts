import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { css } from 'css-configuration';

export default defineConfig({
  plugins: [react()],
  css,
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
