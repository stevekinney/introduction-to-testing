import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime('2024-02-29');
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call callback after delay', () => {
    const callback = vi.fn();

    delay(callback);
    vi.advanceTimersToNextTimer();

    expect(callback).toHaveBeenCalled();
    expect(new Date()).toBe(null);
  });
});
