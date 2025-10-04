import {order} from "../data/orderItem.js"
import { products } from '../data/product.js'
const container = document.querySelector('.grid-container');


let html =" ";
order.forEach((item) =>{
    let matchingProduct = products.find((p) => p.id === item.productId);
     html += `
     <div class="card">
                <div class="return-image">
                    <img src="${matchingProduct.image}" alt="image-of-product">
                </div>
                <div class="body-info">
                     <p class="product-name">${matchingProduct.name}</p>
                    <p class="quantity">Quantity: <span>${item.quantity}</span></p>
                   </div>
                 <div class="buttons">
                   <div class="track-location border-1">
                    <img width="20" src="images/icons/location.svg" alt="">
                    <span>Track Item</span>
                   </div>
                   <div class="purchase-item border-1">
                    <img width="20" src="images/icons/loop.svg" alt="">
                    <span>Order Again</span>
                   </div>
                   <div class="return border-1">
                    <img width="20" src="images/icons/return-box.svg" alt="">
                    <span>Return Item</span>
                   </div>
                   </div>
            </div>
    `
})
container.innerHTML = html;

