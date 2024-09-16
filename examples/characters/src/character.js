import { Person } from './person.js';
import { rollDice } from './roll-dice.js';

export class Character extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);

    this.role = role;
    this.level = 1;

    this.createdAt = new Date();
    this.lastModified = this.createdAt;

    this.strength = rollDice(4, 6);
    this.dexterity = rollDice(4, 6);
    this.intelligence = rollDice(4, 6);
    this.wisdom = rollDice(4, 6);
    this.charisma = rollDice(4, 6);
    this.constitution = rollDice(4, 6);
  }

  levelUp() {
    this.level++;
    this.lastModified = new Date();
  }
}
