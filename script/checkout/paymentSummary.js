import {cart} from '../../data/cart.js'
import { cartProduct } from '../../data/product.js'
import { formatPrice} from '../unite/formatPrice.js'
  
export function renderPaymentSummary(){
  let productsPriceCents = 0;
    cart.forEach(element => {
        let product = cartProduct(element.productId)
       productsPriceCents += product.priceCents * element.quantity;
    });
    const totalBeforeTax = productsPriceCents || 0;
    const tax = totalBeforeTax * 0.08;
    const priceAfterTotal = totalBeforeTax + tax;
    const paymentSummaryHtml = `
    <div class="summary-row">
        <div>Items:</div><div id="subtotal">${formatPrice(totalBeforeTax)}</div>
      </div>
      <div class="summary-row">
        <div id="tax">Tax (8%):</div><div id="tax">${formatPrice(tax)}</div>
      </div>
      <div class="summary-row total">
        <div>Total:</div><div id="total">${formatPrice(priceAfterTotal)}</div>
      </div>
      <button class="checkout-btn" id="place-order-btn">Proceed to Payment</button>`;
      document.querySelector('.summary-container').innerHTML = paymentSummaryHtml;

      const btnPlace = document.getElementById('place-order-btn');
      const notification = document.querySelector('.confirm-msz');
      let setTimeStore;

      btnPlace.addEventListener('click', () => {
        notification.classList.add('show');
        if(setTimeStore){
          clearInterval(setTimeStore)
        }
       setTimeStore = setInterval(() =>{
          notification.classList.remove('show');
        }, 2000)
      });
}

