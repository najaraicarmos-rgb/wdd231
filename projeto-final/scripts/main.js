import { configurarMenu, configurarModal } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    configurarMenu();
    configurarModal();

    if (!localStorage.getItem('visitasVerdeLar')) {
        localStorage.setItem('visitasVerdeLar', '1');
    } else {
        let total = parseInt(localStorage.getItem('visitasVerdeLar')) + 1;
        localStorage.setItem('visitasVerdeLar', total);
    }

    const containerCatalogo = document.querySelector('#catalogo-container');
    if (containerCatalogo) {
        carregarCatalogo(containerCatalogo);
    }
});

async function carregarCatalogo(container) {
    try {
        const resposta = await fetch('scripts/dados.json');
        if (!resposta.ok) {
            throw new Error('Erro ao carregar os dados das plantas.');
        }
        const plantas = await resposta.json();

        container.innerHTML = '';

        plantas.forEach(planta => {
            const cartao = document.createElement('div');
            cartao.classList.add('plant-card');
            cartao.innerHTML = `
                <h3>${planta.nome}</h3>
                <p><strong>Ambiente:</strong> ${planta.ambiente}</p>
                <p><strong>Rega:</strong> ${planta.rega}</p>
                <p>${planta.descricao}</p>
            `;
            container.appendChild(cartao);
        });

    } catch (erro) {
        console.error('Erro capturado:', erro);
        container.innerHTML = `<p style="color: red;">Não foi possível carregar o catálogo no momento. Tente novamente mais tarde.</p>`;
    }
}