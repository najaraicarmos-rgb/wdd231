const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';
const cartoes = document.querySelector('#cartoes');

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

        cartoes.appendChild(cartao);
    });
};

async function obterDadosDeProfetas() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirProfetas(dados.profetas);
}

obterDadosDeProfetas();