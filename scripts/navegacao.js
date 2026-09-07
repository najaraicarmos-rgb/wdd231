const hamButton = document.querySelector('#ham-btn');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});

document.querySelector('#ano-atual').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent = `Última modificação: ${document.lastModified}`;