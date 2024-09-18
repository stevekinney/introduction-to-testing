// Import the readline module to handle user input
import { createInterface } from 'readline';

// Create an interface for reading from stdin (standard input)
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to handle user's guess
function askQuestion() {
  rl.question('Guess the number (between 1 and 100): ', (answer) => {
    const guess = parseInt(answer, 10);
    attempts++;

    // Check if the user's guess is correct
    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
      askQuestion(); // Ask again if input is invalid
    } else if (guess < randomNumber) {
      console.log('Too low!');
      askQuestion(); // Ask again
    } else if (guess > randomNumber) {
      console.log('Too high!');
      askQuestion(); // Ask again
    } else {
      console.log(`Correct! You guessed the number in ${attempts} attempts.`);
      rl.close(); // End the game
    }
  });
}

// Start the game by asking the first question
askQuestion();
