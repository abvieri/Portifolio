/* Animação do menu lateral */

const sections = document.querySelectorAll('.main_section');
const navItems = document.querySelectorAll('#menu li');

function handleScroll() {
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      if (navItems[index].classList.contains('selected') === false) {
        navItems.forEach(item => item.classList.remove('selected'));
        navItems[index].classList.add('selected');

        navItems[index].querySelector('svg').setAttribute('fill', '#fff');
        navItems[index].style.backgroundColor = '#fff';
      }
    } else {
      navItems[index].querySelector('svg').setAttribute('fill', '#666');
      navItems[index].style.backgroundColor = '';
    }
  });
}

window.addEventListener('scroll', handleScroll);