const formEtapa3 = document.querySelector(".formulario-etapa3");
const selEtapa3 = document.getElementById("selecao-etapa3");
const btnProx3 = document.getElementById("but-prox-etapa3");
const btnVoltar3 = document.getElementById("but-voltar-etapa3");
const inputChk1 = document.getElementById("input-complemento1");
const inputChk2 = document.getElementById("input-complemento2");
const inputChk3 = document.getElementById("input-complemento3");
const valorCompl1 = document.getElementById("valor-complemento1");
const valorCompl2 = document.getElementById("valor-complemento2");
const valorCompl3 = document.getElementById("valor-complemento3");
let valorOnline = 1;
let valorArmazenamento = 2;
let valorPerfil = 2;

function atualizaComplementos() {
    if (periodoSel == "Mensal") {
        valorCompl1.innerText = `+R$${valorOnline},00/mes`;
        valorCompl2.innerText = `+R$${valorArmazenamento},00/mes`;
        valorCompl3.innerText = `+R$${valorPerfil},00/mes`;
    } else if (periodoSel == "Anual") {
        valorCompl1.innerText = `+R$${valorOnline * 10},00/ano`;
        valorCompl2.innerText = `+R$${valorArmazenamento * 10},00/ano`;
        valorCompl3.innerText = `+R$${valorPerfil * 10},00/ano`;
    }
}

function selecionaComplemento(id) {
    const inputCompl = document.getElementById(`input-complemento${id}`)
    const chkComplSel = document.getElementById(`checkbox-complementos${id}`);
    const titComplSel = document.getElementById(`tit-complemento${id}`);
    const infoComplSel = document.getElementById(`info-complemento${id}`);
    const valorComplSel = document.getElementById(`valor-complemento${id}`);

    if (inputCompl.checked == true) {
        chkComplSel.classList.replace("checkbox-complementos", "checkbox-complementos-sel");
        titComplSel.classList.replace("tit-complemento", "tit-complemento-sel");
        infoComplSel.classList.replace("info-complemento", "info-complemento-sel");
        valorComplSel.classList.replace("valor-complemento", "valor-complemento-sel");
    } else if (inputCompl.checked == false) {
        chkComplSel.classList.replace("checkbox-complementos-sel", "checkbox-complementos");
        titComplSel.classList.replace("tit-complemento-sel", "tit-complemento");
        infoComplSel.classList.replace("info-complemento-sel", "info-complemento");
        valorComplSel.classList.replace("valor-complemento-sel", "valor-complemento");
    }
}


btnProx3.addEventListener("click", function () { trocaFormulario(formEtapa3, formEtapa4); trocaSelecao(selEtapa3, selEtapa4); montaResumo() });
btnVoltar3.addEventListener("click", function () { trocaFormulario(formEtapa3, formEtapa2); trocaSelecao(selEtapa3, selEtapa2); });
inputChk1.addEventListener("click", function () { selecionaComplemento(1) });
inputChk2.addEventListener("click", function () { selecionaComplemento(2) });
inputChk3.addEventListener("click", function () { selecionaComplemento(3) });