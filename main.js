
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result_p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');




function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = userChoice + ' beats ' + compChoice + '. You Win!';
}

function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = userChoice + ' loses ' + compChoice + '. You Lose!';
}

function equals(userChoice, compChoice){
    result_div.innerHTML = userChoice + ' equals ' + compChoice + '. No point';
    
}



function getCompChoice(){
    const choices= ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function start(userChoice){
    const compChoice = getCompChoice();
    

    switch(userChoice+compChoice){
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            equals(userChoice, compChoice);
            break;
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            win(userChoice, compChoice);
            break;
        case 'RockPaper':
        case 'ScissorsRock':
        case 'PaperScissors':
            lose(userChoice, compChoice);
            break;
    }
}

function main(){
    rock.addEventListener('click', () => {
        start('Rock');
    })

    paper.addEventListener('click', () => {
        start('Paper');
    })
    scissors.addEventListener('click', () => {
        start('Scissors');
    })
};

main();
