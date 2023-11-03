'use strict';


let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // WHen there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
    }

    // When player wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');

        document.querySelector('.number').textContent = guess;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== secretNumber) {
         if (score > 0) {
                // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
                displayMessage(guess > secretNumber ? 'Too high' : 'Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                // document.querySelector('.message').textContent = 'You lost the game!';
                displayMessage('You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
    }
    // WHen guess is too high
    
    
    // }
    // //When guess is too low
    // else if (guess < secretNumber) {
    //     if(score > 0) { 
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    // document.querySelector('.message').textContent = 'Start guessing....'
    displayMessage('Start guessing');
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
     document.querySelector('.number').textContent = '?';
    guess = Number(document.querySelector('.guess').value);

    


    
    
})



