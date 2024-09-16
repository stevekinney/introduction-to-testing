import { expect, it, describe } from 'vitest';
import { counter } from './counter';

// For added fun, we can try `describe.shuffle`.
describe.todo('Counter', () => {
  it('starts at zero', () => {
    expect(counter.value).toBe(0);
  });

  it('can increment', () => {
    counter.increment();
    expect(counter.value).toBe(1);
  });

  // Let's get this test to *not* fail.
  it('can decrement', () => {
    counter.increment();
    counter.decrement();
    expect(counter.value).toBe(0);
  });
});
