import { it, expect } from 'vitest';
import { generateFibonacci } from './fibonacci';

it.skip('should generate fibonacci sequence', () => {
  const fibonacci = generateFibonacci(10);
  expect(fibonacci).toBe([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
