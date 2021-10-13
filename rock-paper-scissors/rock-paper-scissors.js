const select = document.querySelectorAll('button');

select.forEach(function(element){
    element.addEventListener('click',function(test){
        console.log(test.target.parentElement.value);
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
        if (computerSelection=='rock')
            return("You lose! Rock beats Scissors")
        else{
            return("You win! Scissor beats Paper")
        }
    }
    else if (playerSelection=='paper'){
        if (computerSelection=='scissors')
            return("You lose! Scissor beats Paper")
        else{
            return("You win! Paper beats Rock")
        }
    }
    else{
        if (computerSelection=='paper')
            return("You lose! Paper beats Rock")
        else{
            return("You win! Rock beats Scissor")
        }
    }
}




