document.querySelector('#ano-atual').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent = document.lastModified;

const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});