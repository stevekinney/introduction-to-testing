import { describe, it, expect } from 'vitest';
import { Person } from './person.js';

// Remove the `todo` from the `describe` to run the tests.
describe.todo('Person', () => {
  // This test will fail. Why?
  it('should create a person with a first name and last name', () => {
    const person = new Person('Grace', 'Hopper');
    expect(person).toEqual({
      firstName: 'Grace',
      lastName: 'Hopper',
    });
  });

  it('should throw an error if first name or last name is missing', () => {
    expect(() => new Person('Grace')).toThrow(
      'First name and last name are required',
    );

    expect(() => new Person()).toThrow('First name and last name are required');
  });

  it('should return the full name', () => {
    const person = new Person('Grace', 'Hopper');
    expect(person.fullName).toBe('Grace Hopper');
  });
});
