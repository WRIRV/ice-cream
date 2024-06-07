const menu = document.querySelector('.main-nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    menu.classList.toggle('main-nav-open');
    burger.classList.toggle('burger-close');
});