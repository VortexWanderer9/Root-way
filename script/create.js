import {userData } from '../data/user.js'


function saveToLocalStorage(){
    localStorage.setItem('userData', JSON.stringify(userData))
}
saveToLocalStorage()
    

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const createBtn = document.getElementById('submit-adv');
const errorText = document.querySelector('.error-text');

 createBtn.addEventListener('click', (e) =>{
e.preventDefault();
errorText.textContent = ""
    let fname = firstName.value.trim();
    let lname = lastName.value.trim();
    let mail = email.value.trim();
    let code = password.value.trim()
    if(fname, lname, mail, code === ""){
        errorText.textContent = "Check all the form are Filled"
    } else makeAccount(fname, lname, mail, code)
    saveToLocalStorage()

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

});


function makeAccount(fn, ln, em, pas){
  let login = makeObj(fn, ln, em, pas)
userData.push(login)
saveToLocalStorage()
console.log(userData);
}

function makeObj(fn, ln, em, pas){
    let user = {
        firstName: fn,
        lastName: ln,
        email: em,
        password: pas
    };
    return user;
}



