import cursoBYUI from './curso.mjs';
import { definirSecaoSelecionada } from './secoes.mjs';
import { definirTitulo, renderizarSecoes } from './saida.mjs';

// Chamadas iniciais para carregar a página
definirTitulo(cursoBYUI);
definirSecaoSelecionada(cursoBYUI.secoes);
renderizarSecoes(cursoBYUI.secoes);

// Ouvintes de eventos nos botões (com renderizarSecoes adicionado)
document.querySelector("#matricularEstudante").addEventListener("click", function () {
  const numeroSecao = Number(document.querySelector("#numeroSecao").value);
  cursoBYUI.mudarMatriculas(numeroSecao);
  renderizarSecoes(cursoBYUI.secoes);
});

document.querySelector("#removerEstudante").addEventListener("click", function () {
  const numeroSecao = Number(document.querySelector("#numeroSecao").value);
  cursoBYUI.mudarMatriculas(numeroSecao, false);
  renderizarSecoes(cursoBYUI.secoes);
});
