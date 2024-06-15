function makeChoice(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('computerSelection').textContent = computerChoice.toUpperCase();

    const result = determineWinner(playerChoice, computerChoice);

    displayResult(result);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('roundResult');
    resultElement.textContent = result;
}

function resetGame() {
    document.getElementById('computerSelection').textContent = '-';
    document.getElementById('roundResult').textContent = 'Make your choice to start playing!';
}