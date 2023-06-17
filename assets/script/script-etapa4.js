const formEtapa4 = document.querySelector(".formulario-etapa4");
const selEtapa4 = document.getElementById("selecao-etapa4");
const formEtapa5 = document.querySelector(".formulario-etapa5");
const btnConfirmar = document.getElementById("but-confirmar");
const btnVoltar4 = document.getElementById("but-voltar-etapa4");
const mudarPlano = document.getElementById("mudar");
const planoEscolhido = document.getElementById("plano-escolhido");
const valorPlano = document.getElementById("valor-plano");
const complFinal1 = document.getElementById("complemento-final1");
const valorComplFinal1 = document.getElementById("valor-compl-final1");
const complFinal2 = document.getElementById("complemento-final2");
const valorComplFinal2 = document.getElementById("valor-compl-final2");
const complFinal3 = document.getElementById("complemento-final3");
const valorComplFinal3 = document.getElementById("valor-compl-final3");
const totalFinal = document.getElementById("total-final");
const valorFinal = document.getElementById("valor-final");
let valor1 = "";
let valor2 = "";
let valor3 = "";
let valor4 = "";

function montaResumo() {
    planoEscolhido.innerText = `${planoSel} (${periodoSel})`;

    if (planoSel == "Arcade" & periodoSel == "Mensal") {
        valorPlano.innerText = `R$${valorArcade},00/mes`;
        valor1 = valorArcade;
    } else if (planoSel == "Arcade" & periodoSel == "Anual") {
        valorPlano.innerText = `R$${valorArcade * 10},00/ano`;
        valor1 = valorArcade * 10;
    } else if (planoSel == "Advanced" & periodoSel == "Mensal") {
        valorPlano.innerText = `R$${valorAdvanced},00/mes`;
        valor1 = valorAdvanced;
    } else if (planoSel == "Advanced" & periodoSel == "Anual") {
        valorPlano.innerText = `R$${valorAdvanced * 10},00/ano`;
        valor1 = valorAdvanced * 10;
    } else if (planoSel == "Pro" & periodoSel == "Mensal") {
        valorPlano.innerText = `R$${valorPro},00/mes`;
        valor1 = valorPro;
    } else if (planoSel == "Pro" & periodoSel == "Anual") {
        valorPlano.innerText = `R$${valorPro * 10},00/ano`;
        valor1 = valorPro * 10;
    }

    if (inputChk1.checked == false) {
        complFinal1.style.color = "transparent";
        valorComplFinal1.innerText = "";
        valor2 = 0;
    } else if (inputChk1.checked == true & periodoSel == "Mensal") {
        complFinal1.style.color = "var(--cool-gray)";
        valorComplFinal1.innerText = `+R$${valorOnline},00/mes`;
        valor2 = valorOnline;
    } else if (inputChk1.checked == true & periodoSel == "Anual") {
        complFinal1.style.color = "var(--cool-gray)";
        valorComplFinal1.innerText = `+R$${valorOnline * 10},00/ano`;
        valor2 = valorOnline * 10;
    }

    if (inputChk2.checked == false) {
        complFinal2.style.color = "transparent";
        valorComplFinal2.innerText = "";
        valor3 = 0;
    } else if (inputChk2.checked == true & periodoSel == "Mensal") {
        complFinal2.style.color = "var(--cool-gray)";
        valorComplFinal2.innerText = `+R$${valorArmazenamento},00/mes`;
        valor3 = valorArmazenamento;
    } else if (inputChk2.checked == true & periodoSel == "Anual") {
        complFinal2.style.color = "var(--cool-gray)";
        valorComplFinal2.innerText = `+R$${valorArmazenamento * 10},00/ano`;
        valor3 = valorArmazenamento * 10;
    }

    if (inputChk3.checked == false) {
        complFinal3.style.color = "transparent";
        valorComplFinal3.innerText = "";
        valor4 = 0;
    } else if (inputChk3.checked == true & periodoSel == "Mensal") {
        complFinal3.style.color = "var(--cool-gray)";
        valorComplFinal3.innerText = `+R$${valorPerfil},00/mes`;
        valor4 = valorPerfil;
    } else if (inputChk3.checked == true & periodoSel == "Anual") {
        complFinal3.style.color = "var(--cool-gray)";
        valorComplFinal3.innerText = `+R$${valorPerfil * 10},00/ano`;
        valor4 =valorPerfil * 10;
    }

    if (periodoSel == "Mensal") {
        totalFinal.innerText = "Total (por mês)"
        valorFinal.innerText = `R$${valor1 + valor2 + valor3 + valor4},00/mes`;
    } else if (periodoSel == "Anual") {
        totalFinal.innerText = "Total (por ano)"
        valorFinal.innerText = `R$${valor1 + valor2 + valor3 + valor4},00/ano`;
    }


}

atualizaComplementos();
trocaPeriodo();
destacaCartao(1, 2, 3);
montaResumo();
btnConfirmar.addEventListener("click", function () { trocaFormulario(formEtapa4, formEtapa5), salvarDados()});
btnVoltar4.addEventListener("click", function () { trocaFormulario(formEtapa4, formEtapa3); trocaSelecao(selEtapa4, selEtapa3); });
mudarPlano.addEventListener("click", function () { trocaFormulario(formEtapa4, formEtapa2); trocaSelecao(selEtapa4, selEtapa2); });