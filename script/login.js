const button = document.querySelector(".button");
const email = document.querySelector('#email-input');
const password = document.querySelector('#password-input');

button.addEventListener('click', (e) =>{
    e.preventDefault();
    let user = email.value.trim()
    console.log(user);
    
          
})