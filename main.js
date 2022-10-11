// Prendre un integer random inclus entre 0 et 2 => choix du computer
function getRandomInteger(max) {
  let valueComputer = Math.floor(Math.random() * (max +1));

}
//convertir cet integer en string entre rock(0) paper (1) scissors (2)
function computerPlay() {
  const randomIntegerBetween0and2 = getRandomInteger(2)
  return ["Rock", "Paper", "Scissors"][randomIntegerBetween0and2]
}
//creer un message d erreur si l user fait un choix autre que rock paper scissors

// prendre les 2 string player et computer et dire qui gagne
