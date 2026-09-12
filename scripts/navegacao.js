const btnMenu = document.querySelector('#menu-hamburguer');
const navMenu = document.querySelector('#nav-menu');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    btnMenu.classList.toggle('open');
});