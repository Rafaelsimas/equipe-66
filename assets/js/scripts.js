let usuarioLogado;

function login(){
    const btnLogin = document.querySelector('.btn-login-pagina-login')
    const primeiraTela = document.querySelector('.primeira-tela')
    const segundaTela = document.querySelector('.segunda-tela')
    primeiraTela.classList.add('escondido')
    segundaTela.classList.remove('escondido')
}

function entrar(){
    const segundaTela = document.querySelector('.segunda-tela')
    const quartaTela = document.querySelector('.quarta-tela')
    segundaTela.classList.add('escondido')
    quartaTela.classList.remove('escondido')
    const inputCampoUsuario = document.querySelector('.btn-login-pagina-login').value
    const user = document.querySelector('#user')
    user.innerHTML = inputCampoUsuario
    registrarUsuario = user

}


function registrarUsuario(){
    const primeiraTela = document.querySelector('.primeira-tela')
    const terceiraTela = document.querySelector('.terceira-tela')
    primeiraTela.classList.add('escondido')
    terceiraTela.classList.remove('escondido')
}