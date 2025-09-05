let angle = 0;
const root = document.documentElement;
function rotateGradient(){
    angle = (angle + 1) % 360;
    root.style.setProperty('--angle', `${angle}deg`);
    requestAnimationFrame(rotateGradient)
}
rotateGradient()

