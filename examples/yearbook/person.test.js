import { describe, expect, it } from 'vitest';
import { Person } from './person';

describe('Person', () => {
  it('should be an instance of a Person', () => {
    const person = new Person('John', 'Doe', '2000-01-01');
    expect(person).toBeInstanceOf(Person);
  });
});
