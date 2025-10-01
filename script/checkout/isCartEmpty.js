import { cart } from '../../data/cart.js';
const con = document.querySelector('.empty-cart')

export function checkCartLength(){
    let html = `  <img src="images/empty-cart.svg" width="400"  alt="">
            <span>Cart is Empty</span>`
    const cartLength = cart.length;
    if(cartLength === 0){
      con.innerHTML = html
    }
}
checkCartLength();


con.addEventListener('click', (e) =>{
    window.location.href = 'main.html'
})
