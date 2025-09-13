const nav = document.getElementById('navbar');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 80){
        nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled')
    }
})
const menuBtn = document.querySelector('.menu');
const sideNav = document.querySelector('.side-nav');
const closeBtn =  document.querySelector('.close');
menuBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    sideNav.classList.toggle('nav-active');
   closeBtn.addEventListener('click', (e) =>{
       sideNav.classList.remove('nav-active');
    });
    console.log(menuBtn.childElementCount)
});
     


const favIcon = document.querySelectorAll('.favorite-icon');
favIcon.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    // Toggle pin/unpin state
    icon.classList.toggle('pinned');
    // Update the inner image based on state
    const isPinned = icon.classList.contains('pinned');
    icon.innerHTML = `<img width="1" src="images/icons/favorite-${isPinned ? 'pin' : 'unpin'}.svg" alt="favorite">`;
  });
});

