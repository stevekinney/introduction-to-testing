import { describe, it, expect } from 'vitest';
import { stringToNumber } from './string-to-number';

describe('stringToNumber', () => {
  it('converts a string to a number', () => {
    expect(stringToNumber('42')).toBe(42);
  });

  it('throws an error if given a string that is not a number', () => {
    const value = 'foo';
    expect(() => stringToNumber(value)).toThrowError(
      `cannot be parsed as a number`,
    );
  });
});
