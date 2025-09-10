 export let userData = JSON.parse(localStorage.getItem('userData'));
if(!userData){
   userData = [{
    firstName: 'Adam',
    lastName: 'Smith',
    email: "elliot@society.com",
    password:21
}]
}