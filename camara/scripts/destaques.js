const urlMembros = 'dados/membros.json';
const cardsDestaque = document.querySelector('#cards-destaque');

async function buscarMembrosDestaque() {
    try {
        const resposta = await fetch(urlMembros);
        if (resposta.ok) {
            const dados = await resposta.json();
            exibirDestaques(dados.membros || dados);
        }
    } catch (erro) {
        console.error(erro);
    }
}

function exibirDestaques(membros) {
    const membrosElegiveis = membros.filter(membro => {
        const nivel = membro.nivel;
        return nivel === 2 || nivel === 3 ||
            nivel === 'Prata' || nivel === 'Ouro' ||
            nivel === 'Silver' || nivel === 'Gold';
    });

    const destaquesEmbaralhados = membrosElegiveis.sort(() => 0.5 - Math.random());
    const membrosSelecionados = destaquesEmbaralhados.slice(0, 3);

    cardsDestaque.innerHTML = '';

    membrosSelecionados.forEach(membro => {
        let card = document.createElement('section');

        let imagem = document.createElement('img');
        let caminhoImagem = membro.imagem.startsWith('http') ? membro.imagem : `imagens/${membro.imagem}`;
        imagem.setAttribute('src', caminhoImagem);
        imagem.setAttribute('alt', `Logotipo de ${membro.nome}`);
        imagem.setAttribute('loading', 'lazy');

        let nome = document.createElement('h3');
        nome.textContent = membro.nome;

        let nivel = document.createElement('p');
        const nivelTexto = (membro.nivel === 3 || membro.nivel === 'Ouro' || membro.nivel === 'Gold') ? 'Nível Ouro' : 'Nível Prata';
        nivel.textContent = nivelTexto;

        let descricao = document.createElement('p');
        descricao.textContent = membro.descricao || '';

        let endereco = document.createElement('p');
        endereco.innerHTML = `<strong>Endereço:</strong> ${membro.endereco}`;

        let telefone = document.createElement('p');
        telefone.innerHTML = `<strong>Telefone:</strong> ${membro.telefone}`;

        let site = document.createElement('a');
        site.setAttribute('href', membro.site);
        site.setAttribute('target', '_blank');
        site.textContent = 'Visitar Website';

        card.appendChild(imagem);
        card.appendChild(nome);
        card.appendChild(nivel);
        if (membro.descricao) {
            card.appendChild(descricao);
        }
        card.appendChild(endereco);
        card.appendChild(telefone);
        card.appendChild(site);

        cardsDestaque.appendChild(card);
    });
}

buscarMembrosDestaque();