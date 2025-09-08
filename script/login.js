const button = document.querySelector(".button");
const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const error = document.querySelector('.error-message');




button.addEventListener('click', (e) =>{
    e.preventDefault();
    let user = email.value.trim();
    let pass = password.value.trim();
    if(user === "" || pass === ""){
      error.innerHTML = "Email and Password must be entered"
        
    }


});
function loginValidate(user, password){

}
