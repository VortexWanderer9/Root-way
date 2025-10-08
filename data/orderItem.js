export let order;

function loadFromStorage(){
    order = JSON.parse(localStorage.getItem('order')) // why error?? 
        if(!order){
            order =  [
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
loadFromStorage()

function addToLocalStore(){
    localStorage.setItem('order', JSON.stringify(order))
}
addToLocalStore()
export function addToOrder(productId, quantity){
let matchingProduct = order.find(p => p.productId === productId);
if(matchingProduct){
    matchingProduct.quantity += quantity;
}else{
    order.push({
        productId: productId,
        quantity: quantity,
    });
}
addToLocalStore()
}
