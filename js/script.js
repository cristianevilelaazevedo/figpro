const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//Fixando o nav ao scrolar 
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
})

//Inicializando a biblioteca AOS Animate
AOS.init({
    duration: 1000,
    once: true
});