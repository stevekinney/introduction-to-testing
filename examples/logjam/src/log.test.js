import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe.todo('logger', () => {
  it('logs to the console in development mode', () => {
    const spy = vi.spyOn(console, 'log');

    log('Hello, world!');

    expect(spy).toHaveBeenCalledWith('Hello, world!');

    spy.mockRestore();
  });
});
