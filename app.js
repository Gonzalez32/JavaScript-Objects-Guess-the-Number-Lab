console.log('---------------------')
// Completing the following tasks will result in a working Guess the Number game:

// Add a prevGuesses property to the game object initialized to an empty array.

// Add a getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]:. Hint - use a template literal for the prompt message.

// Ensure that the getGuess method returns a value that:

// Is a number, not a string.
// Is between smallestNum and biggestNum, inclusive.
// Hints:
// This is a great use case for a while loop.
// parseInt returns NaN if the string cannot be parsed into a number.
// From within the play method, invoke the getGuess method, and add the new guess to the prevGuesses array.

// Add a render method to game that play will call after a guess has been made that alerts:

// If the secret has been guessed:
//  Congrats! You guessed the number in [x] guesses!
// Otherwise:
//  Your guess is too [high|low]
//  Previous guesses: x, x, x, x
// Hints:
// render won't be able to access any of play's local variables, e.g., guess, so be sure pass render any arguments as needed.
// Template literals not only have interpolation, but they also honor whitespace - including line breaks!
// The list of previous guesses can be generated using the array join method.
// The play method should end (return) when the guess matches secretNum.

const game = {
    title: 'Guess the Number!',
    prevGuesses: [],
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        // create a var let guess and while the guess num push it in the array if guess is the serect-num return to the user
        let guess = NaN;
        while (guess !== this.secretNum) {
            guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess);
            if (guess === this.secretNum)
            return;
        }
    },
    // create a function for getGuess ----
    getGuess: function() {
        let guess = NaN;
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
            guess = parseInt(prompt(`ENTER A GUESS BETWEEN ${this.smallestNum} AND ${this.biggestNum}: `));
        }
        return guess;
    }, 
    // create a function for render the alert message to the user ----
    render: function(guess) {
        if (this.secretNum === guess) {
            alert(`CONGRATS! YOU GUESS THE NUMBER IN ${this.prevGuesses.length} GUESSES!`);
        } else if (guess > this.secretNum) {
            alert(`YOUR GUESS IS TOO HIGH! PREVIOUS GUESSES: ${this.prevGuesses.join(", ")}`);
        } else if (guess < this.secretNum) {
            alert(`YOUR GUESS IS TOO LOW! PREVIOUS GUESSES: ${this.prevGuesses.join(", ")}`);
        }
    }
  };
  
// calling the play function within the game object{}
game.play();

// var random_number = Math.floor(Math.random() * 100);
// console.log(random_number);
// let randomNumber = Math.floor(Math.random() * 100); 
// console.log(randomNumber);
