// Assignment Code
var generateBtn = document.querySelector("generate");
var passwordFiled = document.querySelector("password");
alert(passwordFiled);

// Write password to the #password input
function writePassword() {
  alert(123);
  var password = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
              
            for (i = 1; i <= 8; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1); 
                  
                password += str.charAt(char) 
            } 
              
            return pass; 
        } 
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn("generate").addEventListener("click", writePassword() {
//  alert (password)
//});
//</script>
