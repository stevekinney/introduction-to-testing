import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    it('logs to the console in development mode', () => {
      const logSpy = vi.fn();

      log('Hello World');

      expect(logSpy).toHaveBeenCalledWith('Hello World');
    });
  });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should not call console.log in production', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World', { mode: 'production', productionCallback: logSpy });

      expect(logSpy).not.toHaveBeenCalled();
      expect(sendToServer).toHaveBeenCalled();
    });
  });
});
