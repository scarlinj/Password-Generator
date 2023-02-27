// This is to generate a random password between 8 and 128 characters

// password variable is a placeholder for user generated amount of length
var newPassword = "";

// References to the #generate ID
var generateBtn = document.querySelector("#generate");

// References to the #copyPassword ID
var copyBtn = document.querySelector("#copyPassword");

// Variables for each parameter for the password
const upperCaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseList = 'abcdefghijklmnopqrstuvwxyz';
const numbersList = '0123456789';
const specialCharList = '~!@#$%^&*()-=_+[]{};:"';
var criteriaChoices = "";

// Add event listener to generate button - call the generatePassword function
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  // prevent screen from refreshing after button clicked
  event.preventDefault();

  // clear previous password from screen
  password.value === "";
  var newPassword = "";

  // prompt user to generate password
  window.alert("Generate your secure password here.  You must include a password that has the criteria selected.");

    // set password length
    var passwordLength = window.prompt("How long will your password be? Must be at least 8 characters and at most 128 characters.");
    // check if password is a valid number
    if (isNaN(passwordLength)) {
      window.alert('Please type a valid number.')
      return;
    }
        // check if password is the correct length
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert('Please choose a number between 8 and 128.')
    };
    alert("Your password will have " + passwordLength + " characters.");
    console.log("Your password will have " + passwordLength + " characters.");

// Include each type of character selected for the password

// include lower case characters
var lowerCase = window.confirm("Would you like to include include lowercase characters?")
// include upper case characters
var upperCase = window.confirm("Would you like to include include uppercase characters?")
// include numeric characters
var numericCase = window.confirm("Would you like to include include numeric characters?")
// include special characters
var specialCase = window.confirm("Would you like to include include special characters?")

// Use criteria based on user choices
  if (lowerCase) {
    criteriaChoices += lowerCaseList;
    console.log("Your password will include lower case characters.");
    console.log(lowerCaseList);
  }
  ;

  if (upperCase) {
    criteriaChoices += upperCaseList;
    console.log("Your password will include upper case characters.");
    console.log(upperCaseList);
  }
  ;

  if (numericCase) {
    criteriaChoices += numbersList;
    console.log("Your password will include numeric characters.");
    console.log(numbersList);
  }
  ;

  if (specialCase) {
    criteriaChoices += specialCharList;
    console.log("Your password will include special characters.");
    console.log(specialCharList);
  }
  ;

  // Generate the password after user answers prompts
  // for loop will go through above criteria X number of times and add to the generated password

  for (var i = 0; i < passwordLength; i++) {
    // var randomList = randomizeItem * inputSelection;
    newPassword += criteriaChoices.charAt(Math.floor(Math.random() * criteriaChoices.length));
  }
    // newPassword += randomList;
    password.value = newPassword;  

  // call the generatePassword function
  // return newPassword;
  console.log(newPassword);
};
  

// Write password to the #password input
// function writePassword() {

//   var password = generatePassword();
//   // Display new password to the screen
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   console.log("Your new password is " + password);
// };

// // function to copy password to clipboard - referenced tutorial on Youtube TechnicalCafe
// // References to the #generate ID
// // var generateBtn = document.querySelector("#generate");
// function copyText(password) {

//   var copyBtn = document.querySelector('#password');
//   // document.execCommand("Copy");
//   console.log("Password copied to clipboard!");
// };