

const button = document.querySelector(".button");
const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const error = document.querySelector('.error-message');




button.addEventListener('click', (e) =>{
   e.preventDefault()
   error.textContent = ""
    let user = email.value.trim();
    let pass = password.value.trim();
    if(user === "" || pass === ""){
        error.textContent = "Email and Password must be entered"
    }
});
function loginValidate(user, password){

}
