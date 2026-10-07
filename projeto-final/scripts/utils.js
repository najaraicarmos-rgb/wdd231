export function configurarMenu() {
    const btn = document.querySelector('#menu-btn');
    const nav = document.querySelector('#nav-menu');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
}

export function configurarModal() {
    const modal = document.querySelector('#modal-dica');
    const btnAbrir = document.querySelector('#abrir-modal');
    const btnFechar = document.querySelector('#fechar-modal');

    if (modal && btnAbrir && btnFechar) {
        btnAbrir.addEventListener('click', () => modal.showModal());
        btnFechar.addEventListener('click', () => modal.close());
    }
}