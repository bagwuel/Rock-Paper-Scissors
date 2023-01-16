function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return (choice);
}

const playerChoices = document.querySelectorAll('.selection_btn');
const display = document.getElementById('display_header');
const pScore = document.getElementById('pscore')
const cScore = document.getElementById('cscore')
const replay = document.getElementById('replay')

let playerScore = 0;
let computerScore = 0;

playerChoices.forEach(playersChoice => playersChoice.addEventListener('click', playRound))

replay.addEventListener('click', gameReplay)
function gameReplay() {
    playerChoices.forEach(playersChoice => {playersChoice.disabled = false})
    playerScore = 0;
    computerScore = 0;
    display.textContent = 'Select A Weapon To Play';
    pScore.textContent = 0;
    cScore.textContent = 0;
}
// function playerChoice () {
//     while (true) {
//         let playerSelection = prompt("Enter rock, paper or scissors: ");
//         if (playerSelection === null) 
//             return null;

//         if (playerSelection === ""){
//             console.log("input a choice");
//         }
//         else{
//             playerSelection = playerSelection.toLowerCase();
//             if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")
//                 console.log("That is a wrong choice")
//             else
//                 return (playerSelection);
//         }
          
//     }
// }

function playRound () {
    let playerSelection = this.value.toLowerCase()
    let computerSelection = getComputerChoice();
    computerSelection = hardMode(playerSelection);
    if (playerSelection === computerSelection) 
        display.textContent = "A draw";
    else if (((playerSelection === "rock") && (computerSelection === "scissors")) 
        || ((playerSelection === "paper") && (computerSelection === "rock")) 
        || ((playerSelection === "scissors") && (computerSelection === "paper"))){
            display.textContent = 'You win!';
            playerScore += 1;
    }
    else {
        display.textContent = 'You loose!';
        computerScore += 1;
    }
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    let gameWon = winner(playerScore, computerScore);
    if (gameWon) {
        display.textContent = gameWon;
        playerChoices.forEach(playersChoice => {playersChoice.disabled = true})
    }
}

function winner(playerScore, computerScore) {
    if (playerScore === 5 && playerScore > computerScore) {
        return ('Congratulation! You won the Game!');
    }
    else if (computerScore === 5 && playerScore < computerScore) {
        return ('Oh no! You lost the Game!');
    }
} 

function hardMode(playerSelection) {
    if (playerSelection === 'rock')
        return 'paper';
    else if (playerSelection === 'paper')
        return 'scissors';
    else
        return 'rock';
}

// function game () {
//     let computerScore = 0;
//     let playerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = playerChoice();
//         if (playerSelection === null) {
//             console.log("You dont want to play")
//             return;
//         }
//         let computerSelection = getComputerChoice(); 
//         let winner = playRound(playerSelection, computerSelection);
       
//         console.log(winner);

//         if (winner === "win")
//             playerScore += 1;
//         if (winner === "loose")
//             computerScore += 1;
//     }

//     if (computerScore === playerScore)
//         console.log("it's a draw!")
//     else if (computerScore > playerScore)
//         console.log("Sorry try again")
//     else
//         console.log("Congratulations You won!")
// }

// game()