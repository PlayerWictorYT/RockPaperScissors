        document.addEventListener("DOMContentLoaded", function() {

var rock = document.createElement('button');
rock.innerHTML = 'Rock';
rock.id = 'rock';
document.body.appendChild(rock);

var paper = document.createElement('button');
paper.innerHTML = 'Paper';
paper.id = 'paper';
document.body.appendChild(paper);

var scissors = document.createElement('button');
scissors.innerHTML = 'Scissors';
scissors.id = 'scissors';
document.body.appendChild(scissors);

var result = document.createElement('div');
result.innerHTML = 'Result';
result.id = 'result';
document.body.appendChild(result);

var playerScore = document.createElement('div');
playerScore.innerHTML = 'Player Score: 0';
playerScore.id = 'playerScore';
document.body.appendChild(playerScore);

var computerScore = document.createElement('div');
computerScore.innerHTML = 'Computer Score: 0';
computerScore.id = 'computerScore';
document.body.appendChild(computerScore);

var playerChoice = '';
var computerChoice = '';
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      return 'Tie';
    } else if (computerSelection === 'paper') {
      return 'Lose';
    } else {
      return 'Win';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'Win';
    } else if (computerSelection === 'paper') {
      return 'Tie';
    } else {
      return 'Lose';
    }
  } else {
    if (computerSelection === 'rock') {
      return 'Lose';
    } else if (computerSelection === 'paper') {
      return 'Win';
    } else {
      return 'Tie';
    }
  }
}

function game() {
  var playerSelection = this.id;
  var computerSelection = computerPlay();
  var roundResult = playRound(playerSelection, computerSelection);
  if (roundResult === 'Win') {
    playerScore++;
  } else if (roundResult === 'Lose') {
    computerScore++;
  }
  document.getElementById('result').innerHTML = 'Result: ' + roundResult;
  document.getElementById('playerScore').innerHTML = 'Player Score: ' + playerScore;
  document.getElementById('computerScore').innerHTML = 'Computer Score: ' + computerScore;
}

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = '#4CAF50';
  buttons[i].style.border = 'none';
  buttons[i].style.color = 'white';
  buttons[i].style.padding = '15px 32px';
  buttons[i].style.textAlign = 'center';
  buttons[i].style.textDecoration = 'none';
  buttons[i].style.display = 'inline-block';
  buttons[i].style.fontSize = '16px';
  buttons[i].style.margin = '4px 2px';
  buttons[i].style.cursor = 'pointer';
}

var labels = document.getElementsByTagName('div');
for (var i = 0; i < labels.length; i++) {
  labels[i].style.fontSize = '20px';
  labels[i].style.fontFamily = 'Arial';
  labels[i].style.margin = '4px 2px';
}

var all = document.getElementsByTagName('*');
for (var i = 0; i < all.length; i++) {
  all[i].style.textAlign = 'center';
}
});
