let guess = 0
let randomNumber = 0

// This selects the random number and rounds it down to an integer between 1 and 6.
randomNumber = (Math.random() * 6) + 1
randomNumber = Math.floor(randomNumber)

// Event listener that checks for the button to be clicked.
document.getElementById('start-btn').addEventListener('click', playGame)

// This function compares the guess to a selected random number, and outputs different results depending on if it is equal or not.
function playGame () {
  // This grabs the input guess as an integer.
  guess = document.getElementById('input').value
  guess = parseInt(guess)

  // This console log is for backend purposes to ensure that the values are working properly.
  console.log(randomNumber)
  console.log(guess)
  console.log('---')

  // This checks if the guess is equal to the selected random number.
  if (guess === randomNumber) {
    document.getElementById('result').innerHTML = 'Your guess was correct!'
  // Apologies, this program just doesn't feel right without an else statement as well.
  } else {
    document.getElementById('result').innerHTML = `Your guess was incorrect, the number was ${randomNumber}.`
  }
}
