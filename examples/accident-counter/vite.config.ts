import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { css } from 'css-configuration';

export default defineConfig({
  plugins: [react()],
  css,
  test: {
    environment: 'happy-dom',
    globals: true,
  },
});
