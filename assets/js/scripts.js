function login(){
    const btnLogin = document.querySelector('.btn-login-pagina-login')
    const primeiraTela = document.querySelector('.primeira-tela')
    const segundaTela = document.querySelector('.segunda-tela')
    primeiraTela.classList.add('escondido')
    segundaTela.classList.remove('escondido')
}

function registrarUsuario(){
    const primeiraTela = document.querySelector('.primeira-tela')
    const terceiraTela = document.querySelector('.terceira-tela')
    primeiraTela.classList.add('escondido')
    terceiraTela.classList.remove('escondido')
}