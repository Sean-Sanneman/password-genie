// Assignment code here

// Gather required password parameters

var length = parseInt(
  prompt('How many characters would you like your password to contain?')

);
console.log(length)

var hasSpecialCharacters = confirm(
  'Click OK to confirm including special characters.'
);
console.log(hasSpecialCharacters)

var hasLowercaseLetters = confirm(
  'Click OK to confirm including lowercase letters.'
);
console.log(hasLowercaseLetters)

var hasUppercaseLetters = confirm(
  'Click OK to confirm including special characters.'
);
console.log(hasUppercaseLetters)

var hasNumbers = confirm(
  'Click OK to confirm including numbers.'
);
console.log(hasNumbers)


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
