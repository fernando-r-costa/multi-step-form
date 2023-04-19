const formEtapa1 = document.querySelector(".formulario-etapa1");
const selEtapa1 = document.getElementById("selecao-etapa1");
const btnProx1 = document.getElementById("but-prox-etapa1");
const nome = document.getElementById("input-nome-form-etapa1");
const email = document.getElementById("input-email-form-etapa1");
const fone = document.getElementById("input-telefone-form-etapa1");
const erroNome = document.getElementById("erro-nome-form-etapa1");
const erroEmail = document.getElementById("erro-email-form-etapa1");
const erroFone = document.getElementById("erro-telefone-form-etapa1");
const campo = [nome, email, fone];
const erro = [erroNome, erroEmail, erroFone];


function mostraErro(erro, msgErro, campo) {
    erro.innerHTML = msgErro;
    campo.style.borderColor = "var(--strawberry-red)";
}

function limpaErro(erro, campo) {
    erro.innerHTML = "ok";
    erro.style.display = "none";
    campo.style.borderColor = "var(--light-gray)";
}

function verificaVazio(campo, erro) {
    if (campo.value == "") {
        mostraErro(erro, "Este campo é obrigatório", campo);
    } else {
        limpaErro(erro, campo);
    }
}

function verificaNome(campo, erro) {
    if (campo.value.length < 3) {
        mostraErro(erro, "Nome muito pequeno", campo);
    } else {
        limpaErro(erro, campo);
    }
}

function verificaEmail(campo, erro) {
    if (/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(campo.value) == true) {
        limpaErro(erro, campo);
    } else {
        mostraErro(erro, "Digite um e-mail válido", campo)
    }
}

function verificaTelefone(campo, erro) {
    if (/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/.test(campo.value) == true) {
        limpaErro(erro, campo);
    } else {
        mostraErro(erro, "Digite um telefone válido", campo)
    }
}

function validacaoForm() {
    for (let i = 0; i < campo.length; i++) {
        if (erroNome.innerHTML == "ok" & erroEmail.innerHTML == "ok" & erroFone.innerHTML == "ok") {
            trocaFormulario(formEtapa1, formEtapa2);
            trocaSelecao(selEtapa1, selEtapa2);
        } else if (campo[i].value == "") {
            verificaVazio(campo[i], erro[i]);
        } else {
            verificaNome(campo[0], erro[0]);
            verificaEmail(campo[1], erro[1]);
            verificaTelefone(campo[2], erro[2]);
        }
    }
}

function trocaFormulario(fecha, abre) {
    fecha.style.display = "none";
    abre.style.display = "grid";
}

function trocaSelecao(fecha, abre) {
    fecha.style.backgroundColor = 'transparent';
    fecha.style.borderColor = 'var(--cool-gray)';
    fecha.style.color = 'var(--magnolia)';
    abre.style.backgroundColor = 'var(--light-blue)';
    abre.style.borderColor = 'var(--light-blue)';
    abre.style.color = 'var(--purplish-blue)';
}

btnProx1.addEventListener("click", function () { validacaoForm() });