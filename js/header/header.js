const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// making the hamgurger class appear
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// closing hamburger
document.querySelectorAll('.nav-link').forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }),
);
