// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//array of letters
var letArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//array of uppercase letters
var upArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
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

//variable for final choice added to password
var choice = [];

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
console.log(userChoices);

//iterate through the chosen password length
for (var i = 0; i < passwordLength; i++) {
  //get next character type for password
  var randomChoice = Math.floor(Math.random() * userChoices.length);
  //find type and push to choices array
  switch (userChoices[randomChoice]) {
    case 'pwdL':
      choice.push(letArr[Math.floor(Math.random() * letArr.length)]);
      break;
    case 'pwdU':
      choice.push(upArr[Math.floor(Math.random() * upArr.length)]);
      break;
    case 'pwdN':
      choice.push(Math.floor(Math.random() * 10));
      break;
    case 'pwdS':
      console.log(" special character incoming");
      choice.push(specArr[Math.floor(Math.random() * specArr.length)]);
      break;
    default:
      choice.push(Math.floor(Math.random() * 10));
      break;
  }
}