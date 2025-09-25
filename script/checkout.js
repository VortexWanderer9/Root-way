import {cart} from '../data/cart.js'
import {products} from '../data/product.js'
const container = document.querySelector('.checkout-js-html');

let html = "";

cart.forEach((item) => {
    let product = products.find(p => p.id === item.productId);
    if(product) {
        html += `
         <div class="cart-item"><h1 class="date">Delivery date: Saturday September 20</h1>
        <div class="body-part">
          <img src="${product.image}" alt="product">
          <div class="cart-item-details">
            <p class="product-name">${product.name}</p>
            <p class="cart-price">$${(product.priceCents / 100).toFixed(2)}</p>
            <div class="extra-info">
            <p class="item-quantity">Quantity: ${item.quantity}</p>
            <div class="delete-button">Delete</div>
            <div class="update-button">Update</div>
            <input class="input" type="number" value="${item.quantity}">
            </div>
          </div>
        </div>
        </div>`;
    }
});
container.innerHTML = html;



