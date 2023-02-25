// toggle klick
const midle = document.querySelector
('.midle')
// ketika document di click
document.querySelector('#m3').
onclick = () => {
midle.classList.toggle('active')
};
// bisa sentuh selain menu untuk open close
const m3 = document.querySelector('#m3');

document.addEventListener('click', function (e) {
    if (!m3.contains(e.target) && !midle.contains(e.target)) {
        midle.classList.remove('active')
    }
});