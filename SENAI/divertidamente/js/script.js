// DOM
//variavel recebe =  no documento HTML a busca ( class/id NOME)
const imagem = document.querySelector("#foto")
const btAlgeria = document.querySelector("#alegria")
const btRaiva = document.querySelector("#raiva")
const btNojinho = document.querySelector("#nojinho")
const btTristeza = document.querySelector("#tristeza")
const btMedo = document.querySelector("#medo")
const btAnsiedade = document.querySelector("#ansiedade")
const btInveja = document.querySelector("#inveja")
const btTedio = document.querySelector("#tedio")
const btVergonha = document.querySelector("#vergonha")
const conteiner = document.querySelector('.opcao')

//EVENTOS 
//variavel quando clickado, criar a funcao
btAlgeria.addEventListener("click", alegria)
btRaiva.addEventListener("click", raiva)
btTristeza.addEventListener("click", tristeza)
btNojinho.addEventListener("click", nojinho)
btAnsiedade.addEventListener("click", ansiedade)
btInveja.addEventListener("click", inveja)
btVergonha.addEventListener("click", vergonha)
btTedio.addEventListener("click", tedio)
btMedo.addEventListener("click", medo)

//FUNÇAO 
function alegria (){
    imagem.src='images/02.png' //substitui a imagem do html pela essa imagem
    // conteiner.style.backgroundColor = 'yellow'
}

function raiva (){
    imagem.src='images/01.png'
    conteiner.style.backgroundColor = 'red'
}

function tristeza(){
    imagem.src='images/04.png'
    conteiner.style.backgroundColor = 'blue'

}

function nojinho (){
    imagem.src='images/03.png'
    conteiner.style.backgroundColor = 'green'
    
}

//BAIXAR E COLOCAR AS IMAGENS
function ansiedade(){
    imagem.src='images/06.png'
    conteiner.style.backgroundColor = 'orange'
}

function medo (){
    imagem.src = 'images/05.png'
    conteiner.style.backgroundColor = 'purple'
}

function 