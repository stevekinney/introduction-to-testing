import { vi, describe, it, expect } from 'vitest';

vi.useFakeTimers();

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  it.todo('should call callback after delay', () => {});
});
