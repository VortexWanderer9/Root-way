const nav = document.getElementById('navbar');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 80){
        nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled')
    }
})

document.querySelector('.menu').addEventListener('click', (e) =>{
    e.preventDefault()
    
    document.querySelector('.side-nav').classList.toggle('nav-active')
    
})