// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

    var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];   
    var possibleUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var possibleLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var possibleSpecialCharcters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

    var passwordOutCome = [];
    var password = [];

    var passwordlength = prompt ("Enter a password length between 8 and 128");
    var numbers = confirm ("Do you want numbers in your password?");
    var upperCases = confirm ("Do you want Upper Case letter in your password?");
    var lowerCase = confirm ("Do you want Lower Case Letter in your password?");
    var specialCharacters = confirm ("Do you want special characters in your password? (!,@,#,$)");

 

if(numbers){
  passwordOutCome = passwordOutCome.concat(possibleNumbers);
}

if(upperCases){
  passwordOutCome = passwordOutCome.concat(possibleUpperCase);
}

if(lowerCase){
  passwordOutCome = passwordOutCome.concat(possibleLowerCase);
}

if(specialCharacters){
  passwordOutCome = passwordOutCome.concat(possibleSpecialCharcters);
}

console.log(passwordOutCome)

for (var i=0; i < passwordlength; i++){
  password.push(passwordOutCome[Math.floor(Math.random() * passwordOutCome.length)]);
}
return password.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
