// Assignment code here
var input = '';
var inputLength = 0;
var maxLength = 128;
var specialCharacters = "";
var uppercase = "";
var lowercase = "";
var numbers = "";
var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><{}/*-+";
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
  if (secondPrompt === "YES" || initalPrompt === "Yes" || initalPrompt === "yes"){
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (secondPrompt === "NO" || secondPrompt === "No" || secondPrompt === "no"){
    var upperCase = "";
    }
  var thirdPrompt = window.prompt("Would you like your password to contain Lowercase characters?") 
  if (thirdPrompt === "YES" || thirdPrompt === "Yes" || thirdPrompt === "yes"){
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    }
    /*special characters and no uppercase*/
  if (thirdPrompt === "NO" || thirdPrompt === "No" || secondPrompt === "no"){
    var lowercase = "";
    }
    while (inputLength < 8 || (inputLength != null && inputLength > maxLength)) {
    inputLength = window.prompt('Please confirm how long you want your password to be. It should be no more than ' + maxLength + ' characters in length');
    }
    selectedCharacters = specialCharacters + upperCase + lowercase
    console.log(selectedCharacters)
    console.log(lowercase)
    console.log(upperCase)
    console.log(specialCharacters)
    console.log(inputLength)
    while (input.length < inputLength){
    for (var i = 0; i < inputLength; i++)
      input += selectedCharacters.charAt(Math.floor(Math.random() * inputLength))
      console.log(input);
    }
  return input   
  }
  
  /*

  var initalPrompt = window.prompt("Hello! Would you like your password to contain Special Characters like @'s and !;s ?");
 
  if (initalPrompt === "YES" || initalPrompt === "Yes" || initalPrompt === "yes") {
    var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><{}/*-+";
  }
  if (initalPrompt === "NO" || initalPrompt === "No" || initalPrompt === "no") {
    var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  

  
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
function onclick(){ */



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
