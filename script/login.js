import {userData } from '../data/user.js'
const buttonLogin = document.querySelector(".button");
const email = document.querySelector('#email-input');
const passwordInp = document.querySelector('#password-input');
const error = document.querySelector('.error-message');

buttonLogin.addEventListener('click', (e) =>{
   e.preventDefault()
   error.textContent = ""
    let user = email.value.trim();
    let pass = passwordInp.value.trim();
    if(user === "" || pass === ""){
        error.textContent = "Email and Password must be entered"
    } else  loginValidate(user, pass)
   
});
function loginValidate(user, pass){
    userData.forEach(item => {
        if(item.email === user && item.password === pass){
            error.style.color = "rgba(0, 204, 255, 0.4)"
            error.textContent = "~Access Granted~"
            setTimeout(() =>{
            window.location.href = '../main.html'
            }, 500)
        }else{
            error.textContent = "~Invalid Login"
        }
    });



}
    document.querySelector('.dont-have').addEventListener('click', ()=>{
    window.location.href = 'create.html'
    });

