// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 5,
    levelMax = 10,
    level = 1

// UI Element
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    levelNum = document.querySelector('#level-number'),
    guessLeft = document.querySelector('.guessLeft'),
    loader = document.querySelector('#loader')

// Assign Ui 
minNum.textContent = min
maxNum.textContent = max
guessLeft.textContent = guessesLeft
loader.style.display = 'none'

// Play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value)

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    // Check if winning number
    if (guess === winningNum) {
        // Check if all levels are cleared
        if (level === levelMax) {
            // Game over - WIN
            gameOver(true, `You win Buddy!!!!`)

        } else {

            game.style.display = 'none'
            loader.style.display = 'block'

            // Print message for level clearance
            setMessage(`You have promoted to next level, All the Best`, 'blue')

            // Go to next level
            setTimeout(nextLevel, 5000)

        }




    } else {
        // Wrong Number
        guessesLeft -= 1
        guessLeft.textContent = guessesLeft

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game Over, You lost. The correct number was ${winningNum}`)

        } else {

            // Check the input with winning number
            if (guess < winningNum && guess > min - 1) {
                setMessage(`${guess} is less than winning number.`, 'red')
            } else if (guess > winningNum && guess < max + 1) {
                setMessage(`${guess} is greater than winning number`, 'red')
            }

            // Clear input
            guessInput.value = ''

            // Display left guesses
            //setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
})

// Set message
function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}

// Game over
function gameOver(won, msg) {
    let color
    won === true ? color = 'green' : color = 'red'

    // Disable input
    guessInput.disabled = true

    // Change border color
    guessInput.style.borderColor = color

    // Set message
    setMessage(msg, color)

    // Play again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

// Get winning number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}

// Next Level
function nextLevel() {

    // Change level
    level = level + 1

    // Change the max value
    max = max + 10

    // Reset the guessesLeft
    guessesLeft = 5

    // get new winning number
    winningNum = getRandomNumber(min, max)

    // Assign new max, level, guessLEft to UI
    maxNum.textContent = max
    guessLeft.textContent = guessesLeft
    levelNum.textContent = level

    // Clear input
    guessInput.value = ''

    // Set animation back to normal
    game.style.display = 'block'
    loader.style.display = 'none'

}