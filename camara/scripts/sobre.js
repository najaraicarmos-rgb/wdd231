import { locaisInteresse } from "../dados/locais.mjs";

const containerGrid = document.querySelector(".grid-interesse");
const containerMensagem = document.querySelector("#mensagem-visita");

function exibirCartoes() {
    locaisInteresse.forEach(local => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao-interesse");

        cartao.innerHTML = `
      <h2>${local.nome}</h2>
      <figure>
        <img src="${local.imagem}" alt="${local.nome}" width="300" height="200" loading="lazy">
      </figure>
      <address>${local.endereco}</address>
      <p>${local.descricao}</p>
      <button type="button">Saiba mais</button>
    `;

        containerGrid.appendChild(cartao);
    });
}

function gerenciarVisitas() {
    const agora = Date.now();
    const ultimaVisita = localStorage.getItem("ultima-visita-camara");
    let mensagem = "";

    if (!ultimaVisita) {
        mensagem = "Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.";
    } else {
        const diferencaMilissegundos = agora - Number(ultimaVisita);
        const umDiaEmMilissegundos = 86400000;
        const dias = Math.floor(diferencaMilissegundos / umDiaEmMilissegundos);

        if (dias < 1) {
            mensagem = "Já voltou? Que legal!";
        } else if (dias === 1) {
            mensagem = "Seu último acesso foi há 1 dia.";
        } else {
            mensagem = `Seu último acesso foi há ${dias} dias.`;
        }
    }

    containerMensagem.textContent = mensagem;
    localStorage.setItem("ultima-visita-camara", agora);
}

exibirCartoes();
gerenciarVisitas();