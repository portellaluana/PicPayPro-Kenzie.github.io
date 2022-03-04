const listaPagamentos = document.querySelector(
  ".conta-usuario-acoes-transacoes"
);

listaPagamentos.addEventListener("click", identificarPagamento);

function identificarPagamento(event) {
  const li = event.target;
  if (li.tagName == "LI") {
    const id = li.id;

    const escolhaPagamento = document.querySelector(`div[data-id="${id}"]`);

    removeClasseMostrar();

    escolhaPagamento.classList.add("mostrar");
  }
}
function removeClasseMostrar() {
  const divs = document.querySelectorAll(
    ".conta-usuario_pagamento .container  div"
  );
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("mostrar");
  }
}
