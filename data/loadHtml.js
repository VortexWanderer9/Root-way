import { products } from "./product.js"; 
import { cart, addToCart} from "../data/cart.js"
import {updateHeader} from "../script/header.js"


const pageHtml = document.querySelector('.products-grid');
    let html = '';
    products.forEach((items) => {
        html += `<div class="card"  product-data = "${items.id}" >
          <div class="product-image"><img class ="product-img" src="${items.image}"></div>
          <div class="card-body">
            <div class="card-title">${items.name}</div>
            <div class="card-rating">⭐ 4.2</div>
             <div class="favorite-icon">
                <img src="images/icons/favorite-unpin.svg"alt="favorite">
            </div>
            <div class="card-price">$${(items.priceCents / 100).toFixed(2)}</div>
            <div product-data = "${items.id}" class="btn">Add to Cart</div>
          </div>
        </div>`
    });
    pageHtml.innerHTML = html;



const favIcon = document.querySelectorAll('.favorite-icon');
favIcon.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    // Toggle pin/unpin state
    icon.classList.toggle('pinned');
    // Update the inner image based on state
    const isPinned = icon.classList.contains('pinned');
    icon.innerHTML = `<img width="100" src="images/icons/favorite-${isPinned ? 'pin' : 'unpin'}.svg" alt="favorite">`;
  });
});


const addToCartButtons = document.querySelectorAll('.btn');
const message = document.querySelector('.addToCartMessage');
let setTimeStore; // ✅ declare outside

addToCartButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = btn.getAttribute('product-data');
    const product = products.find((p) => p.id === productId);
    addToCart(product.id, 1); 
    updateHeader()
    
    // Show message
    message.classList.add('add');
    if (setTimeStore) {
      clearTimeout(setTimeStore);
    }

    // Hide after 1s
    setTimeStore = setTimeout(() => {
      message.classList.remove('add'); 
    }, 400);
  });
});

