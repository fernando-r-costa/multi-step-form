const formEtapa2 = document.querySelector(".formulario-etapa2");
const selEtapa2 = document.getElementById("selecao-etapa2");
const btnProx2 = document.getElementById("but-prox-etapa2");
const btnVoltar2 = document.getElementById("but-voltar-etapa2");
const iconeCartao1 = document.getElementById("icone-cartao1");
const iconeCartao2 = document.getElementById("icone-cartao2");
const iconeCartao3 = document.getElementById("icone-cartao3");
const valorCartao1 = document.getElementById("valor-cartao1");
const valorCartao2 = document.getElementById("valor-cartao2");
const valorCartao3 = document.getElementById("valor-cartao3");
const inputSwitch = document.getElementById("input-switch");
let valorArcade = 9;
let valorAdvanced = 12;
let valorPro = 15;
valorCartao1.innerText = `R$${valorArcade},00/mês`;
valorCartao2.innerText = `R$${valorAdvanced},00/mês`;
valorCartao3.innerText = `R$${valorPro},00/mês`;
let planoSel = "";
let periodoSel = "";

function destacaCartao(selecao, naoSel1, naoSel2) {
    const iconeCartaoSel = document.getElementById(`icone-cartao${selecao}`);
    const titCartaoSel = document.getElementById(`tit-cartao${selecao}`);
    const valorCartaoSel = document.getElementById(`valor-cartao${selecao}`);
    const brindeCartaoSel = document.getElementById(`brinde-cartao${selecao}`);
    const iconeCartaoNaoSel1 = document.getElementById(`icone-cartao${naoSel1}`);
    const titCartaoNaoSel1 = document.getElementById(`tit-cartao${naoSel1}`);
    const valorCartaoNaoSel1 = document.getElementById(`valor-cartao${naoSel1}`);
    const brindeCartaoNaoSel1 = document.getElementById(`brinde-cartao${naoSel1}`);
    const iconeCartaoNaoSel2 = document.getElementById(`icone-cartao${naoSel2}`);
    const titCartaoNaoSel2 = document.getElementById(`tit-cartao${naoSel2}`);
    const valorCartaoNaoSel2 = document.getElementById(`valor-cartao${naoSel2}`);
    const brindeCartaoNaoSel2 = document.getElementById(`brinde-cartao${naoSel2}`);

    iconeCartaoSel.classList.replace("icone-cartao", "icone-cartao-sel");
    titCartaoSel.classList.replace("tit-cartao", "tit-cartao-sel");
    valorCartaoSel.classList.replace("valor-cartao", "valor-cartao-sel");
    brindeCartaoSel.classList.replace("brinde-cartao", "brinde-cartao-sel");
    iconeCartaoNaoSel1.classList.replace("icone-cartao-sel", "icone-cartao");
    titCartaoNaoSel1.classList.replace("tit-cartao-sel", "tit-cartao");
    valorCartaoNaoSel1.classList.replace("valor-cartao-sel", "valor-cartao");
    brindeCartaoNaoSel1.classList.replace("brinde-cartao-sel", "brinde-cartao");
    iconeCartaoNaoSel2.classList.replace("icone-cartao-sel", "icone-cartao");
    titCartaoNaoSel2.classList.replace("tit-cartao-sel", "tit-cartao");
    valorCartaoNaoSel2.classList.replace("valor-cartao-sel", "valor-cartao");
    brindeCartaoNaoSel2.classList.replace("brinde-cartao-sel", "brinde-cartao");

    switch (iconeCartaoSel.id) {
        case "icone-cartao1":
            planoSel = "Arcade";
            break;
        case "icone-cartao2":
            planoSel = "Advanced";
            break;
        case "icone-cartao3":
            planoSel = "Pro";
    }

    trocaPeriodo()
}

function trocaPeriodo() {
    const mensal = document.getElementById("label-switch-mensal");
    const anual = document.getElementById("label-switch-anual");
    const brinde1 = document.getElementById("brinde-cartao1");
    const brinde2 = document.getElementById("brinde-cartao2");
    const brinde3 = document.getElementById("brinde-cartao3");

    if (inputSwitch.checked == true) {
        anual.classList.replace("label-switch", "label-switch-sel");
        mensal.classList.replace("label-switch-sel", "label-switch");
        brinde1.style.color = "var(--marine-blue)";
        brinde2.style.color = "var(--marine-blue)";
        brinde3.style.color = "var(--marine-blue)";
        valorCartao1.innerText = `R$${valorArcade * 10},00/ano`;
        valorCartao2.innerText = `R$${valorAdvanced * 10},00/ano`;
        valorCartao3.innerText = `R$${valorPro * 10},00/ano`;
        periodoSel = "Anual";
        atualizaComplementos()
    } else if (inputSwitch.checked == false) {
        anual.classList.replace("label-switch-sel", "label-switch");
        mensal.classList.replace("label-switch", "label-switch-sel");
        brinde1.style.color = "transparent";
        brinde2.style.color = "transparent";
        brinde3.style.color = "transparent";
        valorCartao1.innerText = `R$${valorArcade},00/mês`;
        valorCartao2.innerText = `R$${valorAdvanced},00/mês`;
        valorCartao3.innerText = `R$${valorPro},00/mês`;
        periodoSel = "Mensal";
        atualizaComplementos()
    }
}


btnProx2.addEventListener("click", function () { trocaFormulario(formEtapa2, formEtapa3); trocaSelecao(selEtapa2, selEtapa3); });
btnVoltar2.addEventListener("click", function () { trocaFormulario(formEtapa2, formEtapa1); trocaSelecao(selEtapa2, selEtapa1); });
iconeCartao1.addEventListener("click", function () { destacaCartao(1, 2, 3); montaResumo() });
iconeCartao2.addEventListener("click", function () { destacaCartao(2, 1, 3); montaResumo() });
iconeCartao3.addEventListener("click", function () { destacaCartao(3, 2, 1); montaResumo() });
inputSwitch.addEventListener("click", function () { trocaPeriodo(); montaResumo() });