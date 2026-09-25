const urlJson = 'dados/membros.json';
const container = document.querySelector('#membros-container');
const btnGrid = document.querySelector('#grid-view');
const btnLista = document.querySelector('#list-view');

async function carregarMembros() {
    try {
        const resposta = await fetch(urlJson);
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }
        const dados = await resposta.json();
        const membros = dados.membros || dados;
        exibirMembros(membros);
    } catch (erro) {
        console.error('Erro ao carregar o arquivo JSON:', erro);
        container.innerHTML = '<p class="erro">Não foi possível carregar as informações dos membros.</p>';
    }
}

function exibirMembros(membros) {
    container.innerHTML = '';

    membros.forEach((membro) => {
        const cartao = document.createElement('section');
        cartao.classList.add('cartao-membro');

        const niveis = { 1: 'Membro', 2: 'Prata', 3: 'Ouro' };
        const nivelTexto = niveis[membro.nivel] || 'Membro';

        cartao.innerHTML = `
      <img src="${membro.imagem}" alt="Logo de ${membro.nome}" loading="lazy" class="logo-membro" width="100" height="100">
      <h3>${membro.nome}</h3>
      <p class="tag-nivel nivel-${membro.nivel}">Nível ${nivelTexto}</p>
      <p class="descricao">${membro.descricao}</p>
      <p><strong>Endereço:</strong> ${membro.endereco}</p>
      <p><strong>Telefone:</strong> ${membro.telefone}</p>
      <p><a href="${membro.site}" target="_blank" rel="noopener noreferrer">Visitar Website</a></p>
    `;

        container.appendChild(cartao);
    });
}

btnGrid.addEventListener('click', () => {
    container.classList.add('grid-layout');
    container.classList.remove('list-layout');
    btnGrid.classList.add('active-btn');
    btnLista.classList.remove('active-btn');
});

btnLista.addEventListener('click', () => {
    container.classList.add('list-layout');
    container.classList.remove('grid-layout');
    btnLista.classList.add('active-btn');
    btnGrid.classList.remove('active-btn');
});

carregarMembros();