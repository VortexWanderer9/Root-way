let angle = 0;
const root = document.documentElement;
function rotateGradient(){
    angle = (angle + 1) % 360;
    root.style.setProperty('--angle', `${angle}deg`);
    requestAnimationFrame(rotateGradient)
}
rotateGradient()
const title = document.querySelector('.heading');
let i = 0;
let dir = 1;
const text = 'Login First';

function typeWrite() {
  title.textContent = text.substring(0, i);

  i += dir;

  // Flip direction at boundaries
  if (i > text.length || i < 0) {
    dir *= -1;
    i += dir; // adjust to stay within range
  }

  setTimeout(typeWrite, 150); // faster looks smoother
}

typeWrite();



// let i = 0;
// let dir = 1; // 1 = forward, -1 = backward
// const word = "Write it and back it";

// function makeAlgo() {
//   console.log(word.substring(0, i));

//   i += dir;

//   if (i === word.length || i === 0) {
//     dir *= -1; // reverse direction
//   }

//   setTimeout(makeAlgo, 200);
// }

// makeAlgo();
