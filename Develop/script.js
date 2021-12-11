// Assignment code here

var input = [];
var inputLength = 0;
var maxLength = 128;

var generatePassword =function(input) {
  /* while for putting limits on min and max */
  while (inputLength < 8 || (inputLength != null && inputLength > maxLength)) {
    inputLength = window.prompt('Please enter some data. It should be no more than ' + maxLength + ' characters in length');
  }
  console.log(inputLength)
  /* initial prompt*/
 var initalPrompt = window.prompt("Hello! Would you like your password to contain ?");
  /*yes or no response*/
  if (initalPrompt === "YES" || initalPrompt === "YES") {
    // confirm user wants to make a password
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")
  }
}

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
