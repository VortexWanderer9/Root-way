let angle = 0;
const root = document.documentElement;
function rotateGradient(){
    angle = (angle + 1) % 360;
    root.style.setProperty('--angle', `${angle}deg`);
    requestAnimationFrame(rotateGradient)
}
rotateGradient()

let title = document.querySelector('.heading');
let i = 0;
const text = 'Login First'
 function typeWrite(){
    if(i < text.length){
        title.textContent = text.substring(0, i +1);
        i++;
        setTimeout(typeWrite, 200)
    }
    if(i == text.length){
            i--
    }
 }


 typeWrite()