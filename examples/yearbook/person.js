/**
 * A person in the yearbook.
 * @class Person
 * @param {number} id
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} dateOfBirth
 */
export class Person {
  static id = 0;

  /**
   * A person in the yearbook.
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} dateOfBirth
   */
  constructor(firstName, lastName, dateOfBirth) {
    this.id = ++Person.id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    const today = new Date();
    const birthDate = new Date(this.dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
