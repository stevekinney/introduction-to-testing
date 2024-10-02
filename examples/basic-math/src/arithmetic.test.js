import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('should add two negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '1')).toBe(2);
  });

  it('should get real angry if you give it a first argument that cannot be parsed into a number', () => {
    expect(() => add('potato', 2)).toThrow('not a number');
  });

  it('should get real angry if you give it a second argument that cannot be parsed into a number', () => {
    expect(() => add(2, 'potato')).toThrow('not a number');
  });

  it('should throw if the first argument is not a number', () => {
    expect(() => add(NaN, 2)).toThrow('not a number');
  });

  it('should handle floating point math as best it can', () => {
    expect(add(1.0000001, 2.0000004)).toBeCloseTo(3.0, 1);
  });
});

describe('subtract', () => {
  it('should subtract one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('should accept and subtract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  });

  it('should default undefined values to 0', () => {
    expect(subtract(3)).toBe(3);
    expect(subtract(undefined, 3)).toBe(-3);
  });

  it('should default to zero if either argument is null', () => {
    expect(subtract(3, null)).toBe(3);
    expect(subtract(null, 3)).toBe(-3);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should return null if dividing by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });

  it('should return zero if dividing by Infinity', () => {
    expect(divide(10, Infinity)).toBe(0);
  });
});
