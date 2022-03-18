//Generate random choice function of computer 

function computerPlay(){
    let choices = ["rock", "papper", "scissors"];
    let randomChoices = Math.floor(Math.random()*choices.length);
    let result = choices[randomChoices];
    return result;
}


//deklarasi score 

let playerScore =  0;
let computerScore = 0;

// One round play function

function playRound(playerSelection, computerSelection){


    if(playerSelection == computerSelection){
        console.log("Draw!");
    } 
    else if(playerSelection == "rock" && computerSelection == "papper"){
        console.log("You lose!");
        computerScore = computerScore + 1;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win!");
        playerScore = playerScore + 1;
    }
    else if(playerSelection == "papper" && computerSelection == "rock"){
        console.log("You Win!");
        playerScore = playerScore + 1;
    }
    else if(playerSelection == "papper" && computerSelection == "scissors"){
        console.log("You Lose!");
        computerScore = computerScore + 1;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose!")
        computerScore = computerScore + 1;
    }
    else if(playerSelection == "scissors" && computerSelection == "papper"){
        console.log("You Win!");
        playerScore = playerScore + 1;
    }
    else{
        console.log("No such choice!");
    }
    console.log("Your score : " + playerScore);
    console.log("Computer score : " + computerScore);
}


/*
var playerSelection = prompt("Make your choice[rock/ papper/ scissors]");

//to make user input is not case sensitive, convert the playerSelection to lowercase 
var playerSelectionLowercase = playerSelection.toLowerCase();

var computerSelection = computerPlay();
console.log(playRound(playerSelectionLowercase, computerSelection));
 */




//5 rounds play

function game(){


    let round = 5;
    let i = 0;

    for(round = 5; i< round; round--){
    playerSelection = prompt("Make your choice : ");
    var playerSelectionLowercase = playerSelection.toLowerCase();
    var computerSelection = computerPlay();
    console.log(playRound(playerSelectionLowercase, computerSelection));
    }

    //Result output

    if(playerScore == computerScore){
        console.log("Too bad it's Draw");
    } 
    else if(playerScore > computerScore){
        console.log("You Wiiiiiiiiiiiiiiiiiiiiiiiiiiiin");
    }
    else{
        console.log("You Loooooooooooooooooooooooooose");
    }

}


game();