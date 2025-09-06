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
let complete = true
const text = 'Login First'
 function typeWrite(){
    if(i < text.length){
        title.textContent = text.substring(0, i +1);
        i++;
        setTimeout(typeWrite, 200)
    }
 }
 typeWrite()



  let u = 0;
  let tt = "aayush"
  let accept = true;
  function bug(){
    if(accept){
        u ++
        console.log(u);
        
    }
    if(u === tt.length){
        accept = false;
      u --
           console.log(u);
    }
    if(u === 0){
        accept = true
    }
    setTimeout(bug, 200)
  }

  bug()