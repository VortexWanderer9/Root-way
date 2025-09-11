const nav = document.getElementById('navbar');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 80){
        nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled')
    }
})