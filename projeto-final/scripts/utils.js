export function configurarMenu() {
    const btnMenu = document.querySelector('#menu-btn');
    const navMenu = document.querySelector('#nav-menu');
    if (btnMenu && navMenu) {
        btnMenu.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }
}

export function configurarModal() {
    const btnAbrir = document.querySelector('#abrir-modal');
    const btnFechar = document.querySelector('#fechar-modal');
    const modal = document.querySelector('#modal-dica');

    if (btnAbrir && btnFechar && modal) {
        btnAbrir.addEventListener('click', () => {
            modal.showModal();
        });
        btnFechar.addEventListener('click', () => {
            modal.close();
        });
    }
}