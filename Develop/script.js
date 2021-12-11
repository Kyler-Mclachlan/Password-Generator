// Assignment code here
var input = '';
var inputLength = 0;
var maxLength = 128;
var specialCharacters = "";
var uppercase = "";
var lowercase = "";
var numbers = "";
/* var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><{}/*-+"; */

var generatePassword =function() {

  /*Asking if they want special characters*/
  var initalPrompt = window.prompt("Would you like your password to contain Special characters?") 
  if (initalPrompt === "YES" || initalPrompt === "Yes" || initalPrompt === "yes") {
    var specialCharacters = "!@#$%^&*()?><{}/*-+";
    }
  if (initalPrompt === "NO" || initalPrompt === "No" || initalPrompt === "no") {
      var specialCharacters = "";
    }
  
    /* Uppercase */
  var secondPrompt = window.prompt("Would you like your password to contain Uppercase characters?") 
  if (secondPrompt === "YES" || secondPrompt === "Yes" || secondPrompt === "yes"){
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (secondPrompt === "NO" || secondPrompt === "No" || secondPrompt === "no"){
    var upperCase = "";
    }
  
    /*Special characters and no uppercase*/
  var thirdPrompt = window.prompt("Would you like your password to contain Lowercase characters?") 
    if (thirdPrompt === "YES" || thirdPrompt === "Yes" || thirdPrompt === "yes"){
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      }
    if (thirdPrompt === "NO" || thirdPrompt === "No" || thirdPrompt === "no"){
      var lowercase = "";
      }

  var forthPrompt = window.prompt("Would you like your password to contain numbers ?") 
    if (forthPrompt === "YES" || forthPrompt === "Yes" || forthPrompt === "yes"){
      var numbers = "0123456789";
      }
    if (forthPrompt === "NO" || forthPrompt === "No" || forthPrompt === "no"){
      var numbers = "";
      }   
    selectedCharacters = specialCharacters + upperCase + lowercase + numbers  
     /*setting length requirements */ 
  if (selectedCharacters == "") {
    window.alert("Please reselect your critera and try again: At least one character type is required")
      }   
  while (inputLength < 8 || (inputLength != null && inputLength > maxLength)) {
    inputLength = window.prompt('Please confirm how long you want your password to be. It should be no more than ' + maxLength + ' characters in length');
    }

    while (input.length < inputLength && selectedCharacters != ""){
    for (var i = 0; i < inputLength; i++)
      input += selectedCharacters.charAt(Math.floor(Math.random() * inputLength))
      console.log(input);
    }
  return input   
  }
  
  /* console.log(selectedCharacters)
  console.log(lowercase)
  console.log(upperCase)
  console.log(specialCharacters)
  console.log(inputLength) */
  
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
