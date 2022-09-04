
let nome;

const btn1 = document.querySelector('.btn-login')
btn1.addEventListener('click', function(){
    const primeiraTela = document.querySelector('.primeira-tela')
    const segundaTela = document.querySelector('.segunda-tela')
    primeiraTela.classList.add('escondido')
    segundaTela.classList.remove('escondido')
})

const btnAcesso = document.querySelector('.btn-login-usuario')
btnAcesso.addEventListener('click', function(){
    const inputLogin = document.querySelector('#inputLogin').value
    const user = document.querySelector('#user')
    user.innerHTML = inputLogin

    const segundaTela = document.querySelector('.segunda-tela')
    const quartaTela = document.querySelector('.quarta-tela')
    segundaTela.classList.add('escondido')
    quartaTela.classList.remove('escondido')

    nomeDoUsuario.innerHTML = campoNomeDoUsuario

    nome = nomeDoUsuario
})


const btn2 = document.querySelector('.btn-registro')
btn2.addEventListener('click', function(){
    const primeiraTela = document.querySelector('.primeira-tela')
    const terceiraTela = document.querySelector('.terceira-tela')
    primeiraTela.classList.add('escondido')
    terceiraTela.classList.remove('escondido')
})



function registrar(){
    const voltarPHome = document.querySelector('.voltarPHome')
    voltarPHome.innerHTML = 'Armazenando suas informações'
    voltarPHome.style.backgroundColor = 'yellow'
    voltarPHome.style.color = 'black'
    voltarPHome.style.padding = '19px'
    setTimeout(sucesso, 2000)
    setTimeout(voltarParaHome, 3000)
}

function sucesso(){
    const voltarPHome = document.querySelector('.voltarPHome')
    voltarPHome.innerHTML = 'Informações armazenadas com sucesso'
    voltarPHome.style.backgroundColor = 'green'
    voltarPHome.style.color = 'white'
    voltarPHome.style.padding = '19px'
}

function voltarParaHome(){
    const primeiraTela = document.querySelector('.primeira-tela')
    const terceiraTela = document.querySelector('.terceira-tela')
    primeiraTela.classList.remove('escondido')
    terceiraTela.classList.add('escondido')
}



