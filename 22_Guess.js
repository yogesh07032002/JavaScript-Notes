function guessGame() {
  let randomNr = Math.floor(Math.random() * 10) + 1; // Generates a number between 1 and 10
  console.log(randomNr); // For debugging, you can remove this later
  let guess;
  do {
      guess = prompt("Guess a number between 1 and 10");
      
      // Convert the guess to a number
      guess = Number(guess);
      
      if (guess < 1 || guess > 10) {
          console.log("Please guess a number between 1 and 10.");
          continue; // Skip the rest of the loop for invalid guesses
      }

      console.log(guess, randomNr);
      
      if (randomNr > guess) {
          console.log("You guessed too low.");
      } else if (randomNr < guess) {
          console.log("Your guess was too high.");
      }
  } while (guess !== randomNr);
  
  console.log("You won!");
}

guessGame();
