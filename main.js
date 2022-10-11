// creer une fonction qui renvoie un random rock paper scissors
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  var computerPlay = Math.floor(Math.random() * choices.length);

  return choices[computerPlay];
};

console.log(getComputerChoice());
// cette fonction est le choix du pc

// demander au joueur de faire un choix
// entrer ce choix dans une fonction choix du joueur
// comparer la valeur de fonction pc et fonction joueur
function play(playerSelection) {
  let ComputerSelection = computerPlay();
  let result ="";

  if (playerSelection == computerSelection) {
    result = 'You both harnessed' + playerSelection;
  }
  else if ((playerSelection == 'Rock' && computerSelection == 'scissors') ||
  (playerSelection == 'paper' && computerSelection == 'rock') ||
  (playerSelection == 'scissors' && computerSelection == 'paper')) {
    result = "You win";
  }
  else {
    result = "Defeat!";
  }
}
// entrer le resultat dans une fonction resultat
//renvoyer un message annoncant le resultat
