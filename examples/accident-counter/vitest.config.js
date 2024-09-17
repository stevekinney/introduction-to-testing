import { mergeConfig } from 'vitest/config';
import config from './vite.config';

export default mergeConfig(config, {
  test: {
    environment: 'happy-dom',
    globals: true,
  },
});
