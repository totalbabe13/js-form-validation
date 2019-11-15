let emailInput       = document.querySelectorAll("input")[0];
let emailhelpMessage = document.getElementById("emailhelp");
let confirmEmail     = document.querySelectorAll("input")[1]
let confirmMessage   = document.getElementById("confirmemail");
let zipInput         = document.querySelectorAll("input")[3]
let zipMessage       = document.getElementById("confirmzip");
let passwordInput    = document.querySelectorAll("input")[4];
let passwordMessage  = document.getElementById("pswdmessage");
let passwordConfirm  = document.querySelectorAll("input")[5];
let passwordError    = document.getElementById("pswdconfirm");
let formElement      = document.querySelectorAll("form")[0];
let validData        = document.querySelectorAll("input[data-valid]");

emailInput.addEventListener("input", highlightIncomplete);
confirmEmail.addEventListener("input", matchEmails);
zipInput.addEventListener("input", validateZip);
passwordInput.addEventListener("input", checkPassword);
passwordConfirm.addEventListener("input", matchPasswords);
formElement.addEventListener("submit", validateAllInputs);

function highlightIncomplete() {
  if (validateEmail(emailInput.value)) {
    emailInput.style.textDecorationLine = "underline";
    emailInput.style.textDecorationColor = "green";
    emailInput.dataset.valid = "true";
    emailhelpMessage.style.display = "none";
  } else if (!validateEmail(emailInput.value)) {
    emailInput.style.textDecorationLine = "underline";
    emailInput.style.textDecorationColor = "red";
    emailhelpMessage.style.display = "block";
  }
}
function validateEmail(email) {
  if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
    return true;
  } else {
    return false;
  }
}
function matchEmails(){
  if(emailInput.value === confirmEmail.value){
    confirmEmail.style.textDecorationLine = "underline";
    confirmEmail.style.textDecorationColor = "green";
    confirmEmail.dataset.valid = "true";
    confirmMessage.style.display = "none";
  } else if (emailInput.value !== confirmEmail.value) {
    confirmEmail.style.textDecorationLine = "underline";
    confirmEmail.style.textDecorationColor = "red";
    confirmMessage.style.display = "block";
  }
}
function validateZip(){
  if ( /^\d{5}$|^\d{5}-\d{4}$/.test(zipInput.value)) {
    zipInput.style.textDecorationLine = "underline";
    zipInput.style.textDecorationColor = "green";
    zipInput.dataset.valid = "true";
    confirmzip.style.display = "none";
  } else {
    zipInput.style.textDecorationLine = "underline";
    zipInput.style.textDecorationColor = "red";
    confirmzip.style.display = "block";
  }
}
function checkPassword(){
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if(passwordInput.value.match(passw)){
    passwordInput.dataset.valid = "true";
    pswdmessage.style.display = "none";
    return true;
  } else {
    pswdmessage.style.display = "block";
      return false;
  }
}
function matchPasswords(){
  if(passwordInput.value === passwordConfirm.value){
    passwordConfirm.dataset.valid = "true";
    passwordError.style.display = "none";
    passwordConfirm.dataset.valid = "true";
  } else if (passwordInput.value !== passwordConfirm.value) {
    passwordError.style.display = "block";
  }
}
function validateAllInputs(event){
  let allInputs = document.querySelectorAll("input");
  let validations = []
  const isValid = (currentValue) => currentValue === "true";
   for (var i = 0; i < allInputs.length-1; i++) {
    validations.push(allInputs[i].dataset.valid);
   }
   // console.log(validations.every(isValid));
   if(validations.every(isValid)){
     alert("High Five!! Thank You!!");
   }
   event.preventDefault();

}
