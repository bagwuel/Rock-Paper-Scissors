function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return (choice);
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        return ("draw")
    else if (((playerSelection === "rock") && (computerSelection === "scissors")) 
        || ((playerSelection === "paper") && (computerSelection === "rock")) 
        || ((playerSelection === "scissors") && (computerSelection === "paper")))
        return ("win");
    else
        return ("loose")
}



function game () {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors: ");
        let computerSelection = getComputerChoice();
       
        if (playerSelection){
            playerSelection = playerSelection.toLowerCase();
        }
        else{
            console.log("You did not select anything isi aki")
            return;
        }
           
        let winner = playRound(playerSelection, computerSelection);
       
        console.log(winner);

        if (winner === "win")
            playerScore += 1;

        if (winner === "loose")
            computerScore += 1;

    }

    if (computerScore === playerScore)
        console.log("it's a draw!")
    else if (computerScore > playerScore)
        console.log("Sorry try again")
    else
        console.log("Congratulations You win!")
}

game()