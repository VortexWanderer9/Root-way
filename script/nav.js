
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


