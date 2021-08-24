function computerPlay(){
    let choices = ["rock", "papper", "scissors"];
    let randomChoices = Math.floor(Math.random()*choices.length);
    let result = choices[randomChoices];
    return result;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        console.log("Draw!");
    } 
    else if(playerSelection == "rock" && computerSelection == "papper"){
        console.log("You lose!");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win!");
    }
    else if(playerSelection == "papper" && computerSelection == "rock"){
        console.log("You Win!");
    }
    else if(playerSelection == "papper" && computerSelection == "scissors"){
        console.log("You Lose!");
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose!")
    }
    else if(playerSelection == "scissors" && computerSelection == "papper"){
        console.log("You Win!");
    }
    else{
        console.log("No such choice!");
    }
}

var playerSelection = prompt("Make your choice[rock/ papper/ scissors]")
var computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));