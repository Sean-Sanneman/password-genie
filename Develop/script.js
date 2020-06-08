// Assignment code here

// Gather required password parameters

var length = parseInt(
  prompt("How many characters would you like your password to contain?")
);
while (isNaN(length) || length < 8 || length > 128) length = parseInt(prompt("Answer not acceptable! Please choose a value between 8-128, or this system will self-destruct!"));

var hasSpecialCharacters = confirm(
  "Click OK to confirm including special characters."
);
var hasLowercaseLetters = confirm(
  "Click OK to confirm including lowercase letters."
);
var hasUppercaseLetters = confirm(
  "Click OK to confirm including special characters."
);
var hasNumbers = confirm(
  "Click OK to confirm including numbers."
);
console.log(length, hasNumbers, hasUppercaseLetters, hasLowercaseLetters, hasSpecialCharacters)
// parameters established

// functions for generator
function getSpecialCharacter() {
  const characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return characters[Math.floor(Math.random() * symbols.length)];
}

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
