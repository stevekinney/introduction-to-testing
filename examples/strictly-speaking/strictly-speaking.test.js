import { test, expect } from 'vitest';

class Person {
  constructor(name) {
    this.name = name;
  }
}

test('objects with the same properties are equal', () => {
  expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
});

test('objects with different properties are not equal', () => {
  expect({ a: 1, b: 2 }).not.toEqual({ a: 1, b: 3 });
});

test('objects with undefined properties are equal to objects without those properties', () => {
  expect({ a: 1 }).toEqual({ a: 1, b: undefined });
});

test('objects with undefined properties are *not* strictly equal to objects without those properties', () => {
  expect({ a: 1 }).not.toStrictEqual({ a: 1, b: undefined });
});

test('instances are equal to object literals with the same properties', () => {
  expect(new Person('Alice')).toEqual({ name: 'Alice' });
});

test('instances are not strictly equal to object literals with the same properties', () => {
  expect(new Person('Alice')).not.toStrictEqual({ name: 'Alice' });
});
