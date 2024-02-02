// /* ///// Animação Slides ///// */

const carouselItem = document.querySelectorAll('.carousel-item');
const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.attributeName === 'class' && mutation.target.classList.contains('active')) {
            animation();
        }
    }
});

const config = { attributes: true, childList: false, subtree: false };
carouselItem.forEach(e => {
    observer.observe(e, config);
});

function animation() {
    const carousel_item = document.getElementsByClassName('crl');
    const slide01 = document.getElementById('slide01');
    const slide02 = document.getElementById('slide02');
    const slide03 = document.getElementById('slide03');
    let arr = Array.from(carousel_item);
    for (let i = 0; i < arr.length; i++) {
        const e = arr;
        if (e[i].classList[3] == "active") {
            if (e[i].classList[2] == "value_01") {
                slide02.style.display = "none";
                slide03.style.display = "none";
                slide01.style.display = "flex";
            } else if (e[i].classList[2] == "value_02") {
                slide01.style.display = "none";
                slide03.style.display = "none";
                slide02.style.display = "flex";
            } else if (e[i].classList[2] == "value_03") {
                slide01.style.display = "none";
                slide02.style.display = "none";
                slide03.style.display = "flex";
            }
        }
    }
}