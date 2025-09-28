export let favorite;
function getFavoriteItem(){
    favorite = JSON.parse(localStorage.getItem('favorite'))
    if(!favorite){
 favorite = [{
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d'
    }]
    }
  
}
getFavoriteItem()
export function addToFavorite(productId){
    let matchingProduct = favorite.find(p  => p.productId === productId);
    if(matchingProduct){
        alert('This product already Exist')
    }else{
        favorite.push({
            productId: productId
        })
    }
    localStorageFav()
}

 function localStorageFav(){
    localStorage.setItem('favorite', JSON.stringify(favorite))
}
localStorageFav();

export function removeFromFav(productId){
    let newFavItm = [];
    favorite.forEach((itm) =>{
        if(itm.productId !== productId){
            newFavItm.push(itm)
        }
    });
    favorite = newFavItm;
    localStorageFav();
}


// export let favorite = [];

// function getFavoriteItem(){
//     const favorite = JSON.parse(localStorage.getItem('favorite'));
//     if (!favorite){
//         favorite = [{
//             productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d'
//         }];
//     }
// localStorageFav();
// }

// getFavoriteItem();

// export function addToFavorite(productId){
//     const matchingProduct = favorite.find(p => p.productId === productId);
//     if (matchingProduct){
//         alert('This product already exists');
//         return;
//     }
//     favorite.push({
//         productId: productId
//     });
//     localStorageFav();
// }

// function localStorageFav(){
//     localStorage.setItem('favorite', JSON.stringify(favorite));
// }