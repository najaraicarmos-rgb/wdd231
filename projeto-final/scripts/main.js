import { configurarMenu, configurarModal } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    configurarMenu();
    configurarModal();

    const containerCatalogo = document.querySelector('#catalogo-container');
    if (containerCatalogo) {
        carregarCatalogo(containerCatalogo);
    }
});

async function carregarCatalogo(container) {
    try {
        const resposta = await fetch('scripts/dados.json');
        if (!resposta.ok) {
            throw new Error('Erro ao carregar os dados.');
        }
        const plantas = await resposta.json();

        container.innerHTML = '';

        plantas.forEach(planta => {
            const cartao = document.createElement('div');
            cartao.classList.add('plant-card');
            cartao.innerHTML = `
                <img src="${planta.imagem}" alt="Foto de ${planta.nome}" loading="lazy">
                <h3>${planta.nome}</h3>
                <p><strong>Ambiente:</strong> ${planta.ambiente}</p>
                <p><strong>Rega:</strong> ${planta.rega}</p>
                <p>${planta.descricao}</p>
            `;
            container.appendChild(cartao);
        });
    } catch (erro) {
        console.error('Erro:', erro);
        container.innerHTML = `<p style="color: red;">Não foi possível carregar o catálogo.</p>`;
    }
}