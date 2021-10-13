let playerWin=0, computerWin =0;
const select = document.querySelectorAll('button');
let playerWin=0, computerWin=0;

select.forEach(function(element){
    element.addEventListener('click',function(test){
        console.log(playRound(test.target.parentElement.value));
        if (playerWin>=5||computerWin>=5){
            (playerWin>=5)? alert("The winner is Player!"):alert("The winner is computer!")
        }
    })
})




function computerPlay(){
    let choice;
    rand_num = Math.floor(Math.random()*3)+1;
    switch(rand_num){
        case 1: return("rock");
        case 2: return("paper");
        case 3: return("scissors");
    }
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if(playerSelection==computerSelection){
        return("It's a tie!")
    }
    else if (playerSelection=='scissors'){
        if (computerSelection=='rock'){
            computerWin++;
            return("You lose! Rock beats Scissors")
        }
        else{
            playerWin++;
            return("You win! Scissor beats Paper")
        }
    }
    else if (playerSelection=='paper'){
        if (computerSelection=='scissors'){
            computerWin++;
            return("You lose! Scissor beats Paper")
        }
        else{
            playerWin++;
            return("You win! Paper beats Rock")
        }
    }
    else{
        if (computerSelection=='paper'){
            computerWin++;
            return("You lose! Paper beats Rock")
        }
        else{
            playerWin++;
            return("You win! Rock beats Scissor")
        }
    }
}







