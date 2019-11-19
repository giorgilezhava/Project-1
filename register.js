/* email check */
            var ev = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,60}$/

;
            var x = document.getElementById("chkemail");
            function validate(email){
            if(!ev.test(email))
                {
                    x.innerHTML = "Not a valid email";
                    x.style.color = "red"
                }
            else
                {
                    x.innerHTML = "Looks good!";
                    x.style.color = "green"
                }
            }
            /* email check end */




/* password validate*/
	
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

/* Password validate end */

/* password check */


function checkPass()
{
    //password fields
    var password = document.getElementById('psw');
    var confirm  = document.getElementById('psw2');
    // Confirmation Message Object ...
    var message = document.getElementById('check');
    
    //colors
    var rightcolor = "#66cc66";
    var wrongcolor  = "#ff6666";
    
    //compare values in password field 
    //and the confirmation field
    if(password.value == confirm.value){
        //right password 
        
      message.style.color           = rightcolor;

        document.getElementById('check').innerHTML             = ' Passwords Match!';
    }else {
        //wrong password
        message.style.color           = wrongcolor;
      
        document.getElementById('check').innerHTML        = 'Passwords Do Not Match!';

    }


}



/* password check end */


n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;