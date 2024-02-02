/* ///// Animação Scroll Sobre ///// */

document.documentElement.classList.add('js');

function boxTop(idBox) {
    const box = document.getElementById(idBox);
    const boxOffset = box.getBoundingClientRect().top;
    return window.pageYOffset + boxOffset;
}

const target = document.querySelectorAll('.anime');
const animationClass = 'anime-init';
const windowHeight = window.innerHeight;
const offset = windowHeight - (windowHeight / 4);

function animeScroll() {
    const documentTop = window.pageYOffset;
    target.forEach((element) => {
        if (documentTop > boxTop(element.id) - offset) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();
window.addEventListener('scroll', () => {
    setTimeout(() => {
        animeScroll();
    }, 100);
});