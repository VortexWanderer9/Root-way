import { favorite, removeFromFav } from '../data/favorite.js'
import { products, cartProduct } from '../data/product.js' 
const containerFav = document.querySelector('.favorite-items')

export function renderFavoriteItem(){
    let favoriteHtml = ""
     favorite.forEach((item) =>{
    let matchingProduct =  cartProduct(item.productId)
    favoriteHtml += `
    <div class="favorite-item js-fav-${matchingProduct.id}">
                <div class="favorite-image">
                    <img src="${matchingProduct.image}" alt="">
                </div>
                <div class="item-details">
                    <h2>${matchingProduct.name}</h2>
                    <div class="remove-btn js-fav-item-remove" data-set="${matchingProduct.id}">Remove</div>
                </div>
            </div>
    `
 })
 containerFav.innerHTML = favoriteHtml;
}
renderFavoriteItem();
updateHeader()


document.querySelectorAll('.remove-btn').forEach((item) =>{
    item.addEventListener('click', (e) =>{
        let productId = item.getAttribute('data-set')
        console.log(productId);
        const container = document.querySelector(`.js-fav-${productId}`)
        container.remove();
        removeFromFav(productId);
        updateHeader()
        checkItem()
    })
    
});
 
function updateHeader(){
 document.querySelector('.js-fav-count').innerHTML = `${favorite.length}`
}

const con = document.querySelector('.empty-cart')
export function checkItem(){
    let html = `  <img src="images/empty-cart.svg" width="400"  alt="">
            <span>Empty Favorites</span>`
    const cartLength = favorite.length;
    if(cartLength === 0){
      con.innerHTML = html
    }

}
checkItem();
console.log(con);

con.addEventListener('click', (e) =>{
    window.location.href = 'main.html'
})
