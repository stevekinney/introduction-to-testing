import { describe, it, expect } from 'vitest';
import { add } from './arithmetic.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe.todo('subtract', () => {});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
