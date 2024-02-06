AOS.init();

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add('nav-hidden');
  } else {
    navbar.classList.remove('nav-hidden');
    navbar.style.backgroundColor = '#f2f2f2'; 
  }if(window.scrollY===0){
    navbar.style.backgroundColor = 'transparent'
  }
  lastScrollY = window.scrollY;
});
