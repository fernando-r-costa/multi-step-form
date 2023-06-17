const iconeFinal = document.getElementById("icone-final");

const salvarDados = () => {
    const data = {
        Nome: nome.value,
        Email: email.value,
        Fone: fone.value,
        Plano_Escolhido: planoSel,
        Periodo_Selecionado: periodoSel,
        Valor_Plano: valor1,
        Servico_Online: escolhido(inputChk1),
        Valor_Servico: valor2,
        Armazenamento_maior: escolhido(inputChk2),
        Valor_Armazenamento: valor3,
        Perfil_Personalizavel: escolhido(inputChk3),
        Valor_Perfil: valor4,
        Valor_Total: valor1 + valor2 + valor3 + valor4
    };
    console.log(data);
    iconeFinal.innerHTML = '<img src="./assets/images/icons8-a-carregar-48.png" id="salvando">';

    fetch('https://api.sheetmonkey.io/form/kpqzbGyC6CQF6iAQ5EoF17', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((result) => {
        console.log(result);
        iconeFinal.innerHTML = '<img src="./assets/images/icon-thank-you.svg" id="salvo">';
    });
}

function escolhido(campo) {
    if (campo.checked == true) {
        return "sim"
    } else if (campo.checked == false) {
        return "nao"
    }
}