/* ///// Animação dos Efeitos Contato ///// */

const pathObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const element = entry.target;
        if (entry.isIntersecting) {
            if (element.classList[0] == "path_bottom_01" || element.classList[0] == "path_bottom_02") {
                element.classList.add("animate_bottom");
            } else if (element.classList[0] == "path_top_01" || element.classList[0] == "path_top_02") {
                element.classList.add("animate_top");
            }
        }
    });
});

const elementsToAnimate = document.querySelectorAll("section#contact .path");
elementsToAnimate.forEach(element => pathObserver.observe(element));