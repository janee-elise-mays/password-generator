// Assignment Code
var generateBtn = document.querySelector("generate");
var passwordFiled = document.getElementById("password");


// Write password to the #password input
function writePassword() {
 
  var password = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
              
            for (i = 1; i <= 8; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1); 
                  
                password += str.charAt(char) 
            } 
              
            passwordFiled.value = password; 
        } 
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn("generate").addEventListener("click", writePassword() {
//  alert (password)
//});
//</script>
