// Assignment code here


// Gather required password parameters
function informationGrab () {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Invalid Input!!! Choose a value between 8-128, or this system will self-destruct!"));
  
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
if (hasSpecialCharacters === false && hasLowercaseLetters === false && hasUppercaseLetters === false && hasNumbers === false) {
  alert("Password must include at least one set of characters!!!"); 
  return; 
}

  console.log(length, hasNumbers, hasUppercaseLetters, hasLowercaseLetters, hasSpecialCharacters)
  // parameters established

  const userInfo = {
  length: length, 
  special: hasSpecialCharacters,
  lower: hasLowercaseLetters,
  upper: hasUppercaseLetters,
  number: hasNumbers
}
return userInfo;

}





// functions for generator
function getSpecialCharacter() {
  const characters = ["!", "@", "$", "%", "^", "&", "*", "+", "?","<"]; 
  return characters[Math.floor(Math.random() * characters.length)];
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
console.log(getNumber())


function generatePassword() {
  var options = informationGrab();
  var password = "";
  var funcs = [];

  // write checks for criteria
  if(options.special === true) {
    password += getSpecialCharacter()
    funcs.push(getSpecialCharacter)
  } 

  if(options.lower === true) {
    password += getLowercase()
    funcs.push(getLowercase)
  } 

  if(options.upper === true) {
    password += getUppercase()
    funcs.push(getUppercase)
  } 

  if(options.number === true) {
    password += getNumber()
    funcs.push(getNumber)
  } 
  
  // write vars to store password
  // return password 
  //for loop to generate
  for (var i = password.length; i < parseInt.length; i++) {
    var index = Math.floor(Math.random() * funcs.length)
    password += funcs[index] ();
  }
  return password
  console.log(password)
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
generateBtn.addEventListener("click", writePassword());
