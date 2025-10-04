export let order = [];


function addToLocalStore(){
    localStorage.setItem('order', JSON.stringify(order))
}
addToLocalStore()