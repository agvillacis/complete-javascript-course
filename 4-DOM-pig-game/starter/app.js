/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
init();


//document.querySelector('#current-' + activePlayer).textContent = dice; //textContent can only insert string 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// function btn() {
//   //Do something here
// }

//btn passed as a paramater here doesn't have parenthesis and is a callback function because 
//it is a function being called by another function which in this case is the addEventListener function
//document.querySelector('.btn-roll').addEventListener('click', btn); 

//this below is instead an anonymous function because it can't be called anywhere else and is only used in this context 
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  if (gamePlaying) {
    //Do something here
    // 1. Random number
    //firstDice = dice;
    var dice1;
    var dice2;

    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    // 2. display the result 
    var diceDOM1 = document.querySelector('.dice1');
    diceDOM1.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    
    if (dice1 == 1 || dice2 == 1) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    } else {
        //Add score
        roundScore += dice1;
        roundScore += dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; //textContent can only insert string
    }
    
    
    
    // if (firstDice == dice && dice == 6) {
    //   scores[activePlayer] = 0;
    //   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //   nextPlayer();
    // } else {
    //   //Add score
    //   roundScore += dice;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScore; //textContent can only insert string
    // }
    

    
  
    
    // 3. Update the round score IF the rolled number was NOT a 1 
    // if (dice !== 1) {
    //   //Add score
    //   roundScore += dice;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScore; //textContent can only insert string 
    // } else {
    //   nextPlayer();
    // }
  }
 
}); 


document.querySelector('.btn-hold').addEventListener('click', function() {
  
  if (gamePlaying) {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    
    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // Check if player won the game
    var finalScore = document.getElementById('score').value;
    if (scores[activePlayer] >= finalScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      //document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dice1').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';      
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }    
    
    
  }
  
});

function nextPlayer() {
  // Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');
  //document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';
  
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0; //0 is first player, 1 is second player
  gamePlaying = true;
  
  
  //document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  

}






