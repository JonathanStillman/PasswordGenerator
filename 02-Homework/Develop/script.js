// Assignment Code
var generateBtn = document.querySelector("#generate");

// ============================================================ //

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  // Gets inputs in our form
  var lengthInput = document.querySelector("input[name= 'length']");
  var lowercaseInput = document.querySelector("input[name= 'lowercase']");
  var uppercaseInput = document.querySelector("input[name= 'uppercase']");
  var numberInput =  document.querySelector("input[name= 'number']");
  var symbolInput =  document.querySelector("input[name= 'symbol']");


  // Get if user has selected the option
  var params = {
    length: lengthInput.valueAsNumber,
    lowercase: lowercaseInput.checked,
    uppercase: uppercaseInput.checked,
    number: numberInput.checked,
    symbol: symbolInput.checked,
  };
  
  // Generate pass based on user selection
  var password =  generatePassword(params);
  passwordText.value = password;
}

// ============================================================ //

// Generates password within the generator
function generatePassword({length, lowercase, uppercase, number, symbol}) {
  var length = 20,
    charset = "",
    retVal = "";
    if(lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if(uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(number) charset += "0123456789";
    if(symbol) charset += "*;:!?()/@#&-+_^{}[]";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// ============================================================ //

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
