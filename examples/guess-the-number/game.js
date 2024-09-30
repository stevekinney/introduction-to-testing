export class Game {
  /**
   * A number guessing game.
   * @param {number} minimum - The minimum number to guess.
   * @param {number} maximum - The maximum number to guess.
   */
  constructor(minimum = 1, maximum = 100) {
    const seed = Math.random();

    this.secretNumber = Math.ceil(seed * maximum - minimum) + minimum;
    this.guesses = new Set();

    console.log(`Guess the number between ${minimum} and ${maximum}.`);
  }

  /**
   * Make a guess for the secret number.
   * @param {number} number - The number to guess.
   */
  guess(number) {
    if (this.guesses.has(number)) {
      return 'You already guessed that number!';
    }

    this.guesses.add(number);

    if (number < this.secretNumber) {
      return 'Too low!';
    } else if (number > this.secretNumber) {
      return 'Too high!';
    } else if (number === this.secretNumber) {
      return `Correct! You guessed the number in ${this.guesses.size} attempts.`;
    }
  }
}
