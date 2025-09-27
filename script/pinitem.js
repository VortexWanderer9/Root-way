import { favorite } from '../data/favorite.js'
import { products, cartProduct } from '../data/product.js' 
const containerFav = document.querySelector('.favorite-items')

export function renderFavoriteItem(){
    let favoriteHtml = ""
     favorite.forEach((item) =>{
    let matchingProduct =  cartProduct(item.productId)
    favoriteHtml += `
    <div class="favorite-item">
                <div class="favorite-image">
                    <img src="${matchingProduct.image}" alt="">
                </div>
                <div class="item-details">
                    <h2>${matchingProduct.name}</h2>
                    <button class="remove-btn">Remove</button>
                </div>
            </div>
    `
    
 })
 containerFav.innerHTML = favoriteHtml
}


renderFavoriteItem()
 

