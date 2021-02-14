// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordFiled = document.getElementById("password");
var passwordLength = document.getElementById("passwordLength");



function writePassword() {
 
  var password = '';
//   sets an array of acceptable password characters
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
// Detects the desired length of generated password
            for (i = 1; i <= passwordLength.value; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1); 
                  
                password += str.charAt(char) 
            } 
              
            passwordFiled.value = password; 
        } 
