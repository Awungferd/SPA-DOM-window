// # The Guessing Game
// ## Create a guessing game for players.

// * Randomize a number between 1-10. Do not show the player.
// * Make the player guess the number in a prompt.
// ![alt text](./images/start-game.png "Starting Game")
// * If the player guesses the correct number, print out whether the player was successful and in how many attempts (print in the console).
// ![alt text](./images/game-win.png "Won Game")
// * If the player is incorrect, change the text in the prompt to inform the player, e.g. "Nope, sorry! Try again!
// ![alt text](./images/wrong-answer.png "Wrong Answer")
// * If the player fails to guess the number after three attempts, print out that the player was unsuccessful AND what the number was. e.g. "Sorry, you failed to guess the number in three attempts. The number was 0!"
// ![alt text](./images/game-lost.png "Lost Game")

// **See the images for reference*

let maxNumber = 2
let counter = 0
let maxAttempts = 5
let randomNumber = Math.floor(Math.random() * maxNumber + 1)
while (userAttempt = randomNumber) {
    let userAttempt = prompt(`Guess a number between 1 and ${maxNumber}`)
    counter += 1
    if (counter > maxAttempts) {
        document.write(`Sorry, you failed to guess the number in ${maxAttempts} attempts \n The number is ${randomNumber}`)
        break
    }
    if (userAttempt == randomNumber) {
        alert(`Success! The number was ${randomNumber}. Attempts: ${counter}`)
    }
    if (userAttempt != randomNumber) {
        alert("Wrong! Try again!")

    }
}
