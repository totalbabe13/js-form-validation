
let emailInput = document.querySelectorAll('input')[0]

emailInput.addEventListener('input', highlightIncomplete);

function highlightIncomplete(e){

  if(validateEmail(emailInput.value)){
    console.log("valid email")
    emailInput.style.textDecorationLine = "underline";
    emailInput.style.textDecorationColor = "green";
  } else if (!validateEmail(emailInput.value)) {
    console.log("invalid email");
    emailInput.style.textDecorationLine = "underline";
    emailInput.style.textDecorationColor = "red";
  }

  // emailInput.style.textDecorationLine = "underline";
  // emailInput.style.textDecorationColor = "red";
  // console.log(emailInput.value);
}

function validateEmail(email){
  if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
    return true;
  } else {
    return false;
  }
}
