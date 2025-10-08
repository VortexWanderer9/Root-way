import {order } from './orderItem.js'
import { cartProduct } from './product.js'
console.log(order);
const container = document.querySelector('.orders-grid');
let html = "";
order.forEach((item) =>{
let matchingProduct = cartProduct(item.productId)
console.log(matchingProduct);
if(matchingProduct){
    html += ` <div class="order-card">
    <div class = "image-container">
    <img src="${matchingProduct.image}" alt=""></div>
        <div class="order-info">
          <h3>${matchingProduct.name}</h3>
          <p>Order ID: ${matchingProduct.id}</p>
          <p>Status: <span class="status delivered">Delivered</span></p>
        </div>
        <button class="report-btn" onclick="openModal('${matchingProduct.name}')">Report Issue</button>
      </div>
`
}
    
});
container.innerHTML = html