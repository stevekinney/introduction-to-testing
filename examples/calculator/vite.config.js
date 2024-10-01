import { defineConfig } from 'vite';
import { css } from 'css-configuration';

export default defineConfig({
  assetsInclude: ['**/*.html'],
  css,
  test: {
    environment: 'happy-dom',
    globals: true,
  },
});
