// Generate a random target number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
console.log("Target number:", targetNumber); // For testing purposes

// Function to check user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    const messageElement = document.getElementById('message');

    if (userGuess === targetNumber) {
        messageElement.style.color = 'green';
        messageElement.textContent = `Congratulations! ${targetNumber} is the correct number! 🎉`;
        document.getElementById('userGuess').disabled = true;
    } else if (userGuess < targetNumber) {
        messageElement.style.color = 'blue';
        messageElement.textContent = `Try a higher number than ${userGuess}.`;
    } else {
        messageElement.style.color = 'orange';
        messageElement.textContent = `Try a lower number than ${userGuess}.`;
    }
}
