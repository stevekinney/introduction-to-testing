import { Person } from './person.js';
import { rollDice } from './roll-dice.js';

export class Character extends Person {
  constructor(firstName, lastName, role, level = 1, roll = rollDice) {
    super(firstName, lastName);

    this.role = role;
    this.level = level;

    this.createdAt = new Date();
    this.lastModified = this.createdAt;

    this.strength = roll(4, 6);
    this.dexterity = roll(4, 6);
    this.intelligence = roll(4, 6);
    this.wisdom = roll(4, 6);
    this.charisma = roll(4, 6);
    this.constitution = roll(4, 6);
  }

  levelUp() {
    this.level++;
    this.lastModified = new Date();
  }
}
