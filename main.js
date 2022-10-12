// define random integer between 0 ans 2 and define as computer choice
function getRandomInteger(max) {
  return Math.floor(Math.random() * (max +1));

}
//convert integer on string for rock(0) paper (1) scissors (2)
function computerPlay() {
  const randomIntegerBetween0and2 = getRandomInteger(2)
  return ["rock", "paper", "scissors"][randomIntegerBetween0and2]
}
//error message if user dont type rock paper scissors
class ValueError extends Error {
  constructor(badValue) {
    super(`Error: bad value "${badValue}". You should only enter "rock", "paper" or "scissors"`);
    this.name = "ValueError";
  }
}
// take 2 string player and computer, convert in lowercase
function playRound(playerSelection, computerSelection) {
  try {
    const lowerCasePlayerSelection = playerSelection.toLowerCase()
    const lowerCaseComputerSelection = computerSelection.toLowerCase()

// define results messages
    const victoryMessage = `You won! ${playerSelection} beats ${computerSelection}!`
    const defeatMessage = `You loose! ${computerSelection} beats ${playerSelection}!`
    const equalityMessage = `Equality! ${playerSelection} can't beat another ${playerSelection}!`

//rules for user "rock"
    if (lowerCasePlayerSelection === "rock") {
      if (lowerCaseComputerSelection === "rock") return equalityMessage
      if (lowerCaseComputerSelection === "paper") return defeatMessage
      if (lowerCaseComputerSelection === "scissors") return victoryMessage
      throw new ValueError(computerSelection)
    }
//rules for user "paper"
    if (lowerCasePlayerSelection === "paper") {
      if (lowerCaseComputerSelection === "rock") return victoryMessage
      if (lowerCaseComputerSelection === "paper") return equalityMessage
      if (lowerCaseComputerSelection === "scissors") return defeatMessage
      throw new ValueError(computerSelection)
    }
//rules for user "scissors"
    if (lowerCasePlayerSelection === "scissors") {
      if (lowerCaseComputerSelection === "rock") return defeatMessage
      if (lowerCaseComputerSelection === "paper") return victoryMessage
      if (lowerCaseComputerSelection === "scissors") return equalityMessage
      throw new ValueError(computerSelection)
    }
// return errror message
    throw new ValueError(playerSelection)
  } catch (error) {
    if (error instanceof ValueError) return error.message
    if (error instanceof TypeError) return "Please enter a string"
    throw error
  }
}
//launcher
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock, paper or scissors?")
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game()
