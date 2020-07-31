// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//array of letters
var letArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//array of special characters
var specArr = ["\!", "\"", "\#", "\$", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\,", "\-", "\.", 
  "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];

//prompt user to enter password length between 8-128
var passwordLength = prompt("Please enter the desired length of the password \(between 8-128 characters\)");

//parse value to integer
passwordLength = parseInt(passwordLength);

//verify integrity of entered value
while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  passwordLength = prompt("Incorrect value entered. Please enter a value between 8 and 128.")
}

//confirm users choice of characters
var pwdL = confirm("Would you like to include lowercase characters in your password?");
var pwdU = confirm("Would you like to include uppercase characters in your password?");
var pwdN = confirm("Would you like to include numeric characters in your password?");
var pwdS = confirm("Would you like to include special characters in your password?");
var userChoices = [];
console.log(pwdL);

//generate a number between 0-9
var nums = Math.floor(Math.random() * 10);

//create an array that includes all user choices
if (pwdL) {
  userChoices.push('pwdL');
}
if (pwdU) {
  userChoices.push('pwdU');
}
if (pwdN) {
  userChoices.push('pwdN');
}
if (pwdS) {
  userChoices.push('pwdS');
}

// for (let i = 0; i < passwordLength.length; i++) {
//   for (let j = 0; j < userChoice.length; j++) {
//     var charChoice = Math.floor(Math.random() * userChoice.length);
//     while (userchoice[charChoice] === 0) {
//       var charChoice = Math.floor(Math.random() * userChoice.length);
//     }    
//   }
// }