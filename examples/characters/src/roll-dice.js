/**
 * Rolls a specified number of dice with a specified number of sides,
 * drops the lowest roll, and returns the sum of the remaining rolls.
 * @param {number} diceCount - The number of dice to roll.
 * @param {number} diceSides - The number of sides on each die.
 */
export const rollDice = (diceCount = 4, diceSides = 6) => {
  const rolls = [];

  for (let i = 0; i < diceCount; i++) {
    rolls.push(Math.floor(Math.random() * diceSides) + 1);
  }

  rolls.sort((a, b) => a - b); // Sort rolls to drop the lowest one
  return rolls.slice(1).reduce((acc, curr) => acc + curr, 0); // Sum the top 3 rolls
};
