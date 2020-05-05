function computerPlay() {
    let chocices = ['Rock', 'Paper', 'Scissors'];
    let a = Math.floor(Math.random() * 3);
    return chocices[a];
}
function playRound(playerSelection, computerSelection) {
    //rock vs rock OR paper vs paper OR scissors vs cissors
    if(playerSelection.toUpperCase()===computerSelection.toUpperCase()) {
        return "tie";
    } 
    //rock vs paper
    //computer=1 || human=0
    else if(playerSelection.toUpperCase() === "ROCK" ) {
        if(computerSelection.toUpperCase() === "PAPER") {
            return 1;
        }
        else {
            return 0;
        }
    }
    //paper vs scissors
    else if(playerSelection.toUpperCase() === "PAPER" ) {
        if(computerSelection.toUpperCase() === "SCISSORS") {
            return 1;
        }
        else {
            return 0;
        }
    }
    //rock vs scissors 
    else if(playerSelection.toUpperCase() === "SCISSORS" ) {
        if(computerSelection.toUpperCase() === "ROCK") {
            return 1;
        }
        else {
            return 0;
        }
    }
}
function game() {
    let userScore=0, comScore=0, rounds = 5, win, responseArray=[];
    for(let i=0; i<rounds; i++) {
        let userCho = prompt();
        let comCho = computerPlay();
        document.getElementById(i).innerHTML = "Computer: "+comCho + "\t Hooman: "+userCho;
        //responseArray.push(userCho);
        let bin = playRound(userCho,comCho);
        if(bin == 0) {
            userScore ++;
        }
        else if(bin == 1) {
            comScore ++;
        }
        

    }
    if(userScore == comScore) {
        win = "Its a tie";
    }
    else {
        win = (userScore>comScore) ? "Hooman Wins !!" : "Computer wins!!";
    }
    document.getElementById("5").innerHTML=win;
}