import { v4 as id } from 'uuid';

export class Person {
  constructor(firstName, lastName) {
    if (!firstName || !lastName) {
      throw new Error('First name and last name are required');
    }

    this.id = 'person-' + id();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
