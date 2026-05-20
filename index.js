const botaoVoltar = document.querySelectorAll(".botao-voltar")

const telaInicial = document.getElementById("tela-inicial");
const botaoEntrar = document.querySelector(".botao-entrar");
const video = document.getElementById("bg-video");

const telaMenu = document.getElementById("tela-menu");
const botaoFavoritos = document.getElementById("opcao-favoritos");
const botaoClipes = document.getElementById("opcao-clipes");
const botaoPrints = document.getElementById("opcao-prints");
const botaoSobre = document.getElementById("opcao-sobre");

const clipe = document.querySelectorAll(".card-clipe");

const telaFavoritos = document.getElementById("tela-favoritos");


const telaClipes = document.getElementById("tela-clipes");


const telaPrints = document.getElementById("tela-prints");


const telaSobre = document.getElementById("tela-sobre");


let telaAtual = telaInicial;
let historico = [];

function trocarTela(proximaTela) {

    historico.push(telaAtual);

    telaAtual.classList.remove("ativa");

    setTimeout(() => {

        proximaTela.classList.add("ativa");

        telaAtual = proximaTela;

    }, 1000);
}

botaoVoltar.forEach((botao) => {

    botao.addEventListener("click", () => {

        const telaAnterior = historico.pop();

        if (!telaAnterior) return;

        telaAtual.classList.remove("ativa");

        setTimeout(() => {

            telaAnterior.classList.add("ativa");

            telaAtual = telaAnterior;

            if (telaAnterior === telaInicial) {
                video.currentTime = 0;
            }

        }, 1000);

    });

});


botaoEntrar.addEventListener("click", () => {

    trocarTela(telaMenu);

});

botaoFavoritos.addEventListener("click", () => {

    trocarTela(telaFavoritos);

});

botaoClipes.addEventListener("click", () => {

    trocarTela(telaClipes);

});

botaoPrints.addEventListener("click", () => {

    trocarTela(telaPrints);

});

botaoSobre.addEventListener("click", () => {

    trocarTela(telaSobre);

});

window.addEventListener("load", () => {

    video.pause();

    setTimeout(() => {
        video.play();
    }, 1000);
});

clipe.forEach((card) => {

    const videoClipe = card.querySelector("video");

    card.addEventListener("mouseenter", () => {

        videoClipe.play();
        
        videoClipe.muted = true;

    });

    card.addEventListener("mouseleave", () => {

        if (!document.fullscreenElement) {

            videoClipe.pause();

            videoClipe.currentTime = 0;

        }

    });

card.addEventListener("click", () => {

    if (!document.fullscreenElement) {

        videoClipe.muted = false;

        videoClipe.currentTime = 0;

        videoClipe.play();

        if (videoClipe.requestFullscreen) {
            videoClipe.requestFullscreen();
        }

    }

});

    videoClipe.addEventListener("click", (e) => {

        e.preventDefault();

    });

});

document.addEventListener("fullscreenchange", () => {

    if (!document.fullscreenElement) {

        clipes.forEach((card) => {

            const videoClipe = card.querySelector("video");

            videoClipe.currentTime = 0;

            videoClipe.pause();

        });

    }

});