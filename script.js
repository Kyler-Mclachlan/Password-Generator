// Assignment code here
var baseInput = function () {
  var input = '';
  var inputLength = 0;
  var maxLength = 128;
  var specialCharacters = "";
  var uppercase = "";
  var lowercase = "";
  var numbers = "";
}

var result = "";
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
  result = "";
  var initalPrompt = window.prompt("Would you like your password to contain Special characters? Enter Yes or No") 
  if (initalPrompt === "YES" || initalPrompt === "Yes" || initalPrompt === "yes") {
    var specialCharacters = "!@#$%^&*()?><{}/*-+";
    }
  if (initalPrompt === "NO" || initalPrompt === "No" || initalPrompt === "no") {
      var specialCharacters = "";
    }
  
    /* Uppercase */
  var secondPrompt = window.prompt("Would you like your password to contain Uppercase characters? Enter Yes or No") 
  if (secondPrompt === "YES" || secondPrompt === "Yes" || secondPrompt === "yes"){
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (secondPrompt === "NO" || secondPrompt === "No" || secondPrompt === "no"){
    var upperCase = "";
    }
  
    /*Lowercase*/
  var thirdPrompt = window.prompt("Would you like your password to contain Lowercase characters? Enter Yes or No") 
    if (thirdPrompt === "YES" || thirdPrompt === "Yes" || thirdPrompt === "yes"){
      var lowercase = "abcdefghijklmnopqrstuvwxyz";
      }
    if (thirdPrompt === "NO" || thirdPrompt === "No" || thirdPrompt === "no"){
      var lowercase = "";
      }
      /*Numbers*/
  var forthPrompt = window.prompt("Would you like your password to contain Numbers? Enter Yes or No") 
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

    while (result.length < inputLength && selectedCharacters != ""){
    for (var i = 0; i < inputLength; i++)
      result += selectedCharacters.charAt(Math.floor(Math.random() * inputLength))
      console.log(input);
    }
  console.log(result)
  inputLength = 0;
  return result   
  
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
