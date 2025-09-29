export let cart;

getCartFromLocalStorage()
function getCartFromLocalStorage(){
    cart = JSON.parse(localStorage.getItem('cart')) 
   if(!cart){
    cart =  [
              {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
              },
              {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
              },
    ];
}
}

 function addToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId, quantity){
    let matchingProduct = cart.find(item => item.productId === productId);

    if (matchingProduct) {
        matchingProduct.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
        });
    }
    addToLocalStorage();
}

    export function removeFromCart(productId){
        let newCart = [];
        cart.forEach((item) =>{
            if(item.productId !== productId){
                newCart.push(item)
            }
        })
    cart = newCart;
    addToLocalStorage()
    }

export function updateQuantity(productId, quantity){
    let matchingProduct = cart.find(item => item.productId === productId);
  const newQuantity = Number(quantity)
    if(newQuantity <= 0) return;

    if(matchingProduct){
        matchingProduct.quantity = newQuantity;
    }
    addToLocalStorage();
}

