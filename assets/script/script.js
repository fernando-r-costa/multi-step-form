const nome = document.getElementById("input-nome-form-etapa1");
const email = document.getElementById("input-email-form-etapa1");
const fone = document.getElementById("input-telefone-form-etapa1");
const erroNome = document.getElementById("erro-nome-form-etapa1");
const erroEmail = document.getElementById("erro-email-form-etapa1");
const erroFone = document.getElementById("erro-telefone-form-etapa1");
const btnProx1 = document.getElementById("but-prox-etapa1");
const campo = [nome, email, fone];
const erro = [erroNome, erroEmail, erroFone];


function verificaVazio(campo, erro) {
    if(campo.value == "") {
        mostraErro(erro, "Este campo é obrigatório");
    } else {
        limpaErro(erro);
    }
}

function verificaNome(campo, erro) {
    if(campo.value == "") {
        verificaVazio(campo, erro);
    } else if(campo.value.length < 3) {
        mostraErro(erro, "Nome muito pequeno");
    } else {
        limpaErro(erro);
    }
}

function mostraErro(erro, msgErro) {
    erro.innerHTML = msgErro;
}

function limpaErro(erro) {
    erro.innerHTML = "";
}

function validacaoForm () {
    for (let i = 0; i < campo.length; i++) {
        verificaVazio(campo[i], erro[i]);
    }
    verificaNome(campo[0], erro[0]);

}

btnProx1.addEventListener ("click", function() {validacaoForm()});