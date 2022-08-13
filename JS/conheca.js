const botaoMostrarMais = document.querySelector('.conheca-botao')

function leiaMais() {
    const tres_pontos = document.querySelector('.conheca-3pontos')
    const conheca_completo = document.querySelector(".conheca-descricao-completa")
    if(tres_pontos.style.display === "none") {
        tres_pontos.style.display = "inline";
        conheca_completo.style.maxHeight = "0px"
        botaoMostrarMais.innerHTML = "Mostrar mais"
        botaoMostrarMais.classList.remove('mostrar-ativo')
    } else {
        tres_pontos.style.display = "none"
        conheca_completo.style.maxHeight = "1200px"
        botaoMostrarMais.innerHTML = "Mostrar menos"
        botaoMostrarMais.classList.add('mostrar-ativo')
    }
}

botaoMostrarMais.addEventListener('click', leiaMais)