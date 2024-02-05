AOS.init();

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add('nav-hidden');
  } else {
    navbar.classList.remove('nav-hidden');

    if (window.scrollY === 0) {
      navbar.style.backgroundColor = ''; 
    } else {
      navbar.style.backgroundColor = '#f2f2f2'; 
    }
  }
  lastScrollY = window.scrollY;
});
