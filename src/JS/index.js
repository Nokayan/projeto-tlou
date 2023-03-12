/*
    Objetivo - quando clicarmos no botão temos que
    mostrar a imagem de fundo correspondente

    p1 - DAR um jeito de pegar o elemento de html dos botões
    p2 - dar um jeito de identificar o clique do usuário no botão
    p3 - desmarcar o botão selecionado anterior
    p4 - marcar o botão atual selecionado
    p5 - esconder a imagem anterior
    p6 - aparecer a imagem correspondente ao botão clicado

    Lembrar de remover os comentários após o código.
*/

// Passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3
        DesativarBotaoSelecionado();

        //Passo 4
        botao.classList.add('selecionado');

        //Passo 5
        esconderImagemAtiva();

        //Passo 6 - trabalhar com o índice
        imagens[indice].classList.add('ativa');
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
