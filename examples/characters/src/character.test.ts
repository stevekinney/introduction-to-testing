import { describe, it, expect, vi } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Ada';
const lastName = 'Lovelace';
const role = 'Computer Scienst';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character(firstName, lastName, role, 1);
  });

  it.skip('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      firstName,
      lastName,
      role,
      strength: 12,
      wisdom: 12,
      dexterity: 12,
      intelligence: 12,
      constitution: 12,
      charisma: 12,
      level: 1,
      lastModified: expect.any(Date),
      createdAt: expect.any(Date),
      id: expect.stringContaining('person-'),
    });
  });

  it('should allow you to increase the level', () => {
    const initialLevel = character.level;

    character.levelUp();

    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const initialLastModified = character.lastModified;

    character.levelUp();

    expect(character.lastModified).not.toBe(initialLastModified);
  });

  it.only('should roll four six-sided die', () => {
    const rollDiceMock = vi.fn(() => 15);
    const character = new Character(firstName, lastName, role, 1, rollDiceMock);

    expect(character.strength).toBe(15);
    expect(rollDiceMock).toHaveBeenCalledWith(4, 6);
    expect(rollDiceMock).toHaveBeenCalledTimes(6);

    console.log(rollDiceMock.mock.calls);
  });
});
