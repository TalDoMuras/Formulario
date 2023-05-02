const botao = document.getElementById('botao')
let campos = document.querySelectorAll('.campo')
let erroNome = document.querySelector('.erroNome')
let erroEmail = document.querySelector('.erroEmail')
let erroTelefone = document.querySelector('.erroTelefone')
let erroMensagem = document.querySelector('.erroMensagem')

function verificarNome() {
    let erroNome = document.querySelector('.erroNome')

    if (campos[0].value == "") {
        erroNome.textContent = "Campo obrigatório"
        mudarBorda(false, 0)
    } else {
        erroNome.textContent = ""
        mudarBorda(true, 0)
    }
}

function verificarEmail() {
    let erroEmail = document.querySelector('.erroEmail')

    if (campos[1].value == "") {
        erroEmail.textContent = "Campo obrigatório"
        mudarBorda(false,1)
    } else {
        erroEmail.textContent = ""
        mudarBorda(true,1)
    }
}

function verificarTelefone() {
    let erroTelefone = document.querySelector('.erroTelefone')

    if (campos[2].value == "") {
        erroTelefone.textContent = "Campo obrigatório"
        mudarBorda(false,2)
    } else {
        erroTelefone.textContent = ""
        mudarBorda(true,2)
    }
}

function verificarMensagem() {
    let erroMensagem = document.querySelector('.erroMensagem')

    if (campos[3].value == "") {
        erroMensagem.textContent = "Campo obrigatório"
        mudarBorda(false,3)
    } else {
        erroMensagem.textContent = ""
        mudarBorda(true,3)
    }
}

botao.addEventListener('click', function(elemento){
    if (campos[0].value == "") {
        erroNome.textContent = "Campo obrigatório"
        elemento.preventDefault();
        mudarBorda(false, 0)
    }

    if (campos[1].value == "") {
        erroEmail.textContent = "Campo obrigatório"
        elemento.preventDefault();
        mudarBorda(false, 1)
    }

    if (campos[2].value == "") {
        erroTelefone.textContent = "Campo obrigatório"
        elemento.preventDefault();
        mudarBorda(false, 2)
    }

    if (campos[3].value == "") {
        erroMensagem.textContent = "Campo obrigatório"
        elemento.preventDefault();
        mudarBorda(false, 3)
    }
})

function mudarBorda(cor, posicao){
    if(cor == true){
        campos[posicao].classList.remove('bordaVermelha')
        campos[posicao].classList.add('bordaVerde')
    }else{
        campos[posicao].classList.remove('bordaVerde')
        campos[posicao].classList.add('bordaVermelha')
    }
}