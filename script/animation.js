let angle = 0;
const root = document.documentElement;
function rotateGradient(){
    angle = (angle + 1) % 360;
    root.style.setProperty('--angle', `${angle}deg`);
    requestAnimationFrame(rotateGradient)
}
rotateGradient()
const title = document.querySelector('.heading');

const texts = ['Login First', 'Welcome Back', 'Sign Up Now']; // list of words
let wordIndex = 0; // which word
let i = 0;
let dir = 1;

function typeWrite() {
  const text = texts[wordIndex];

  title.textContent = text.substring(0, i);

  i += dir;

  if (i > text.length || i < 0) {
    dir *= -1; // reverse direction

    // If we just finished deleting, go to the next word
    if (i < 0) {
      wordIndex = (wordIndex + 1) % texts.length;
      i = 0;
      dir = 1;
    }
  }

  setTimeout(typeWrite, 150);
}

typeWrite();

