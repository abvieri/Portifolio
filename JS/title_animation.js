/* ///// Animação do Título ///// */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-end", "UI/UX"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


/* ///// Animação menu Hambúrguer ///// */

var navbarScroll = document.getElementById("navbarScroll");
var Toggle_button = document.getElementById("Toggle_button");
document.getElementById('Toggle_button').addEventListener('click', function () {
    if (Toggle_button.getAttribute('aria-expanded') == 'true') {
        navbarScroll.classList.remove('show');
        Toggle_button.setAttribute('aria-expanded', 'false');
    }else{
        navbarScroll.classList.add('show');
        Toggle_button.setAttribute('aria-expanded', 'true');
    }
});