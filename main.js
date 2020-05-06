function computerPlay() {
    let chocices = ['rock', 'paper', 'scissor'];
    let a = Math.floor(Math.random() * 3);
    return chocices[a];
}

function playRound(playerSelection, computerSelection) {
    //rock vs rock OR paper vs paper OR scissors vs cissors
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "tie";
    }
    //rock vs paper
    //computer=1 || human=0
    else if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection.toUpperCase() === "PAPER") {
            return 1;
        } else {
            return 0;
        }
    }
    //paper vs scissors
    else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection.toUpperCase() === "SCISSORS") {
            return 1;
        } else {
            return 0;
        }
    }
    //rock vs scissors 
    else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection.toUpperCase() === "ROCK") {
            return 1;
        } else {
            return 0;
        }
    }
}

document.querySelectorAll('#user2 input[type=image]').forEach((el) => {
    el.addEventListener('click', (event) => {
        game(event.target.value)
    })
});

function game(userCho) {
    let userScore = 0,
        comScore = 0,
        rounds = 5,
        win, responseArray = [];
    let comCho = computerPlay();
    let bin = playRound(userCho, comCho);
    if (comCho == "rock") {
        document.getElementById('comUserRock').src = "/images/rockFocus.svg";
    } else if (comCho == "paper") {
        document.getElementById('comUserPaper').src = "/images/paperFocus.svg";
    } else if (comCho == "scissor") {
        document.getElementById('comUserScissor').src = "/images/scissorFocus.svg";
    }

    if (bin == 0) {
        userScore++;
        if (userCho == "rock") {
            document.getElementById('win').src = "/images/rock.svg";
        } else if (userCho == "paper") {
            document.getElementById('win').src = "/images/paper.svg";
        } else {
            document.getElementById('win').src = "/images/scissor.svg";
        }
    } else if (bin == 1) {
        comScore++;
        if (comCho == "rock") {
            document.getElementById('win').src = "/images/rock.svg";
        } else if (comCho == "paper") {
            document.getElementById('win').src = "/images/paper.svg";
        } else {
            document.getElementById('win').src = "/images/scissor.svg";
        }
    }
    /*for(let i=0; i<rounds; i++) {
        
        let comCho = computerPlay();
        //document.getElementById(i).innerHTML = "Computer: "+comCho + "\t Hooman: "+userCho;
        //responseArray.push(userCho);
        document.getElementById('win')
        let bin = playRound(userCho,comCho);
        if(bin == 0) {
            userScore ++;
        }
        else if(bin == 1) {
            comScore ++;
        }
    }*/

}



//    <script>
//        document.querySelectorAll('#user2 input[type=image]').forEach((el) => {
//        el.addEventListener('click', (event) => { console.log(event.target.value) })
//})
//    </script>