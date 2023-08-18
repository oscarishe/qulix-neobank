const burgerButton = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const backdrop = document.querySelector('.backdrop');
const navLinks = document.querySelectorAll('.header-nav__link')
const headerTogglers = [burgerButton, backdrop, ...navLinks];

headerTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        backdrop.classList.toggle('active');
        document.body.classList.toggle('scroll-y-disabled');
    })
})