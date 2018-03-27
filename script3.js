function computerPlay(){
    var array = ['rock', 'paper', 'scissors'];
    var random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function roundOfGame(computerSelection, playerSelection){
    var ret="";
    switch(true){
        case(computerSelection == playerSelection):
            alert("You tied this round.");
            ret = "Tie";
            break;
        case(computerSelection=='paper' && playerSelection=='rock'):
            alert("You lose round. Paper beats rock.");
            ret = "computer";
            break;
        case(computerSelection=='paper' && playerSelection=='scissors'):
            alert("You win round. Scissors beats paper.");
            ret = "player";
            break;
        case(computerSelection=='scissors' && playerSelection=='paper'):
            alert("You lose round. Scissors beats paper.");
            ret = "computer";
            break;
        case(computerSelection=='scissors' && playerSelection=='rock'):
            alert("You win round. Rock beats scissors.");
            ret = "player";
            break;
        case(computerSelection=='rock' && playerSelection=='scissors'):
            alert("You lose round. Rock beats scissors.");
            ret = "computer";
            break;
        case(computerSelection=='rock' && playerSelection=='paper'):
            alert("You win round. Paper beats rock.");
            ret = "player";
            break;
        default:
            break;
               }
    return ret;
}
function rock(){
    player = "rock";
    game();
}
function paper(){
    console.log("should be here")
    player = "paper";
    alert("Computer chose " + computerPlay());
    game();
}
function scissors(){
    player="scissors";
    alert("Computer chose " + computerPlay());
    game();
}

var player = "";
var playerscore = 0;
var compscore = 0;
function game(){
    console.log("shoudl be here")
    console.log("player choice: " + player);
    var comp = computerPlay();
    alert("Computer chose " + comp + ". Select one!");
    var result = roundOfGame(comp, player);
    console.log(result);
    if(result == 'player'){
        playerscore++;
        document.getElementById("pScore").innerHTML = playerscore;
    }
    else if(result == 'computer'){
        compscore++;
        document.getElementById("cScore").innerHTML = compscore;
    }
    if(playerscore == 5){
        alert("You win game.")
    }
    else if(compscore == 5){
        alert("Computer wins game.")
    }
}

game();