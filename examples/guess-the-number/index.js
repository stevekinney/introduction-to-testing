import { Game } from './game.js';
import chalk from 'chalk';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let game = new Game(1, 100);

function startGame() {
  rl.question(`Guess ${chalk.cyanBright('→')} `, (answer) => {
    const guess = parseInt(answer, 10);

    // Check if the user's guess is correct
    if (isNaN(guess)) {
      console.log(chalk.red('Please enter a valid number.'));
      startGame();
    }

    const result = game.guess(guess);

    console.log(result);

    if (result.startsWith('Correct')) {
      rl.close();
    } else {
      startGame();
    }
  });
}

startGame();
