import {cart ,removeFromCart} from '../../data/cart.js'
import {products} from '../../data/product.js'
import { updateHeader} from '../../script/../script/header.js'
import {renderPaymentSummary} from './paymentSummary.js'
const container = document.querySelector('.checkout-js-html');


let html = "";

export function renderOrderSummary(){
    cart.forEach((item) => {
    let product = products.find(p => p.id === item.productId);
    if(product) {
        html += `
         <div class="cart-item js-cart-item-${product.id}"><h1 class="date">Delivery date: Saturday September 20</h1>
        <div class="body-part">
          <img src="${product.image}" alt="product">
          <div class="cart-item-details">
            <p class="product-name">${product.name}</p>
            <p class="cart-price">$${(product.priceCents / 100).toFixed(2)}</p>
            <div class="extra-info">
            <p class="item-quantity">Quantity: ${item.quantity}</p>
            <div class="delete-button js-delete" product-data ="${product.id}">Delete</div>
            <div class="update-button js-update">Update</div>
            <input class="input" type="number" value="${item.quantity}">
            </div>
          </div>
        </div>
        </div>`;
    }
});
container.innerHTML = html;

document.querySelectorAll('.js-delete').forEach((item) =>{
  item.addEventListener('click', (e) =>{
   let productId = item.getAttribute('product-data');
   removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-${productId}`)
   container.remove()
   updateHeader()
   renderPaymentSummary()
  })
})
}



