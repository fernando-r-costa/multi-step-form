const formEtapa2 = document.querySelector(".formulario-etapa2");
const selEtapa2 = document.getElementById("selecao-etapa2");

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
}

function trocaPeriodo() {
    const inputSwitch = document.getElementById("input-switch");
    const mensal = document.getElementById("label-switch-mensal");
    const anual = document.getElementById("label-switch-anual");

    if(inputSwitch.checked == true) {
        anual.classList.replace("label-switch", "label-switch-sel");
        mensal.classList.replace("label-switch-sel", "label-switch");
    } else if(inputSwitch.checked == false) {
        anual.classList.replace("label-switch-sel", "label-switch");
        mensal.classList.replace("label-switch", "label-switch-sel");
    }
}