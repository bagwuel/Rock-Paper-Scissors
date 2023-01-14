function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * 3)];
    return (choice);
}

function playerChoice () {
    while (true) {
        let playerSelection = prompt("Enter rock, paper or scissors: ");
        if (playerSelection === null) 
            return null;

        if (playerSelection === ""){
            console.log("input a choice");
        }
        else{
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")
                console.log("That is a wrong choice")
            else
                return (playerSelection);
        }
          
    }
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
        let playerSelection = playerChoice();
        if (playerSelection === null) {
            console.log("You dont want to play")
            return;
        }
        let computerSelection = getComputerChoice(); 
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
        console.log("Congratulations You won!")
}

game()