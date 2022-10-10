// creer une fonction qui renvoie un random rock paper scissors
const choices = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
  var computerChoice = Math.floor(Math.random() * choices.length);

  return choices[computerChoice];
};

//console.log(getComputerChoice());
// cette fonction est le choix du pc

// demander au joueur de faire un choix
// entrer ce choix dans une fonction choix du joueur
// comparer la valeur de fonction pc et fonction joueur
// entrer le resultat dans une fonction resultat
//renvoyer un message annoncant le resultat
