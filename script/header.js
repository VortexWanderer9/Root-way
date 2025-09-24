import {cart } from "../data/cart.js"
const cartCount = document.querySelector('.js-cart-count');
export function updateHeader(){
   let totalCartItems = 0;
   cart.forEach(element => {
        totalCartItems += element.quantity
   });
cartCount.textContent = totalCartItems
}
updateHeader()