import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [svelte(), react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['@testing-library/jest-dom/vitest'],
  },
});
