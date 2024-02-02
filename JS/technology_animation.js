/* ///// Animação Carousel Tecnologias ///// */

const slider = document.getElementsByClassName('slide-track')[0];
const slide = document.querySelectorAll('.slide');

slide.forEach(e => {
    e.addEventListener('mouseenter', function () {
        slider.classList.add("paused");
        e.classList.remove("variant");
    });

    e.addEventListener('mouseleave', function () {
        slider.classList.remove("paused");
        e.classList.add("variant");
    });
});

/* ///// Animação Escotilha ///// */

const hatchObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const element = entry.target;
        if (entry.isIntersecting) {

            setTimeout(() => {
                if (hatch.classList == "") {
                    hatch.style.transform = 'translateY(100%)';
                    hatch.style.boxShadow = 'rgba(0, 0, 0, 0) 0px 0px 0px';
                    hatch.classList.add("open");
                }
            }, 2000);

        } else {
            hatch.style.transform = 'translateX(0)';
            hatch.style.boxShadow = 'rgb(175, 176, 177) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset';
            hatch.classList.remove("open");
        }
    });
});

const hatch_elements = document.querySelectorAll("#hatch");
hatch_elements.forEach(element => hatchObserver.observe(element));
