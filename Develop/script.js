// Assignment code here
var input = '';
var inputLength = 0;
var maxLength = 128;
/* var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><{}/*-+"; */

var generatePassword =function() {
  var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><{}/*-+";

  /* asking if the user wants special characters */
  var initalPrompt = window.prompt("Hello! Would you like your password to contain Special Characters like @'s and !;s ?");
  /*yes or no response*/
  if (initalPrompt === "YES" || initalPrompt === "Yes" || initalPrompt === "yes") {
    var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><{}/*-+";
  }
  if (initalPrompt === "NO" || initalPrompt === "No" || initalPrompt === "no") {
    var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }
  
  /* while for putting limits on min and max */
  
  while (inputLength < 8 || (inputLength != null && inputLength > maxLength)) {
    inputLength = window.prompt('Please confirm how long you want your password to be. It should be no more than ' + maxLength + ' characters in length');
  }
  passwordLength = inputLength;
  for (var i = 0; i < passwordLength; i++)
    input += allCharacters.charAt(Math.floor(Math.random() * passwordLength));
  console.log(passwordLength)
  console.log(inputLength)
  
  return input
}
console.log(input)
function onclick(){

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
