let nome = window.document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mensagem = document.querySelector("#mensagem");
let mapa = document.querySelector('#mapa')
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mensagemOk = false;

nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";
mensagem.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1 || email.value.length < 6) {
    txtEmail.innerHTML = "E-mail inválido"
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 4) {
        txtAssunto.innerHTML = "O assunto precisa ter ao menos 4 letras"
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length < 3) {
        txtMensagem.innerHTML = "Digite mais caracteres"
        txtMensagem.style.color = 'red'
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Corrija os campos necessários")
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}
