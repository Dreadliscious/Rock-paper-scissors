// Prendre un integer random inclus entre 0 et 2 => choix du computer
function getRandomInteger(max) {
  return Math.floor(Math.random() * (max +1));

}
//convertir cet integer en string entre rock(0) paper (1) scissors (2)
function computerPlay() {
  const randomIntegerBetween0and2 = getRandomInteger(2)
  return ["rock", "paper", "scissors"][randomIntegerBetween0and2]
}
//creer un message d erreur si l user fait un choix autre que rock paper scissors
class ValueError extends Error {
  constructor(badValue) {
    super(`Error: bad value "${badValue}". You should only enter "rock", "paper" or "scissors"`);
    this.name = "ValueError";
  }
}
// prendre les 2 string player et computer, convertir en lowercase
function playRound(playerSelection, computerSelection) {
  try {
    const lowerCasePlayerSelection = playerSelection.toLowerCase()
    const lowerCaseComputerSelection = computerSelection.toLowerCase()

// definir les messages de victoire
    const victoryMessage = `You won! ${playerSelection} beats ${computerSelection}!`
    const defeatMessage = `You loose! ${computerSelection} beats ${playerSelection}!`
    const equalityMessage = `Equality! ${playerSelection} can't beat another ${playerSelection}!`

//definir les regles du jeu pour "rock"
    if (lowerCasePlayerSelection === "rock") {
      if (lowerCaseComputerSelection === "rock") return equalityMessage
      if (lowerCaseComputerSelection === "paper") return defeatMessage
      if (lowerCaseComputerSelection === "scissors") return victoryMessage
      throw new ValueError(computerSelection)
    }
//definir les regles du jeu pour "paper"
    if (lowerCasePlayerSelection === "paper") {
      if (lowerCaseComputerSelection === "rock") return victoryMessage
      if (lowerCaseComputerSelection === "paper") return equalityMessage
      if (lowerCaseComputerSelection === "scissors") return defeatMessage
      throw new ValueError(computerSelection)
    }
//definir les regles du jeu pour "scissors"
    if (lowerCasePlayerSelection === "scissors") {
      if (lowerCaseComputerSelection === "rock") return defeatMessage
      if (lowerCaseComputerSelection === "paper") return victoryMessage
      if (lowerCaseComputerSelection === "scissors") return equalityMessage
      throw new ValueError(computerSelection)
    }
// definir retour message d'erreur
    throw new ValueError(playerSelection)
  } catch (error) {
    if (error instanceof ValueError) return error.message
    if (error instanceof TypeError) return "Please enter a string"
    throw error
  }
}
//Lanceur de partie
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper or scissors?")
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game()
