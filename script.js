let name = prompt('What is your name?');
alert(`Welcome ${name}! Let's play a game!`);
alert(`The game is Rock, Paper, Scissors.`);


function computerPlay (option) {
    const randomIndex = Math.floor(Math.random() * option.length);
    const item = option[randomIndex];
    return item;
}

const values = ['Rock', 'Paper', 'Scissors'];
const computerSelection = computerPlay(values);
console.log(computerSelection );

//let playerSelection = prompt('Choose your weapon!');
//console.log(playerSelection);

//const playerSelection = "rock";


function playRound(playerSelection, computerSelection) {
    let pointsP = 0;
    let copyPlayerSelection = playerSelection;
    copyPlayerSelection = copyPlayerSelection.toLowerCase();
    let firstP = copyPlayerSelection[0];
    //console.log(firstP);

    let pointsC = 0;
    let copyComputerSelection = computerSelection;
    copyComputerSelection = copyComputerSelection.toLowerCase();
    let firstC = copyComputerSelection[0];
    //console.log(firstC);

    if (firstP == firstC) {
        alert('That is a draw!');
        let draw = 0;
    }

    if ((firstP == 'r' && firstC == 's') || (firstP == 'p' && firstC == 'r') || (firstP == 's' && firstC == 'p')) {
        alert('The player wins!');
        pointsP++;
        console.log(pointsP);
    } else if ((firstC == 'r' && firstP == 's') || (firstC == 'p' && firstP == 'r') || (firstC == 's' && firstP == 'p')) {
        alert('The computer wins!');
        pointsC++;
        console.log(pointsC);
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        alert(`This is round number ${i+1}!`);
        let playerSelection = prompt('Choose your weapon!');
        console.log(playerSelection);
        //if (draw)
        
        console.log(playRound(playerSelection, computerSelection));
        //playRound(playerSelection, computerSelection);
    }
}

//console.log(playRound(playerSelection, computerSelection));
game()
