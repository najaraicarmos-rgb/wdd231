const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';
const cartoes = document.querySelector('#cartoes');
const infosDoCurso = document.querySelector('#infos-do-curso');

function exibirDetalhesProfeta(profeta) {
    infosDoCurso.innerHTML = '';
    infosDoCurso.innerHTML = `
        <button id="fecharModal">❌</button>
        <h2>${profeta.nome} ${profeta.sobrenome}</h2>
        <p><strong>Data de Nascimento:</strong> ${profeta.datadenascimento}</p>
        <p><strong>Local de Nascimento:</strong> ${profeta.localnascimento}</p>
        <img src="${profeta.imagemurl}" alt="Retrato de ${profeta.nome} ${profeta.sobrenome}" width="200">
    `;
    infosDoCurso.showModal();

    const fecharModal = document.querySelector('#fecharModal');
    fecharModal.addEventListener("click", () => {
        infosDoCurso.close();
    });
}

const exibirProfetas = (profetas) => {
    profetas.forEach((profeta) => {
        let cartao = document.createElement('section');
        let nomeCompleto = document.createElement('h2');
        let dataNascimento = document.createElement('p');
        let localNascimento = document.createElement('p');
        let retrato = document.createElement('img');

        nomeCompleto.textContent = `${profeta.nome} ${profeta.sobrenome}`;
        dataNascimento.textContent = `Nascimento: ${profeta.datadenascimento}`;
        localNascimento.textContent = `Lugar: ${profeta.localnascimento}`;

        retrato.setAttribute('src', profeta.imagemurl);
        retrato.setAttribute('alt', `Retrato de ${profeta.nome} ${profeta.sobrenome}`);
        retrato.setAttribute('loading', 'lazy');
        retrato.setAttribute('width', '340');
        retrato.setAttribute('height', '440');

        cartao.appendChild(nomeCompleto);
        cartao.appendChild(dataNascimento);
        cartao.appendChild(localNascimento);
        cartao.appendChild(retrato);

        cartao.addEventListener('click', () => {
            exibirDetalhesProfeta(profeta);
        });

        cartoes.appendChild(cartao);
    });
};

async function obterDadosDeProfetas() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirProfetas(dados.profetas);
}

obterDadosDeProfetas();