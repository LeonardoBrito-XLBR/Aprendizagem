// DOM
const imagem = document.querySelector("#foto")
const btAlgeria = document.querySelector("#alegria")
const btRaiva = document.querySelector("#raiva")
const btTristeza = document.querySelector("#tristeza")
const btNojinho = document.querySelector("#nojinho")
const conteiner = document.querySelector('.opcao')

//EVENTOS 
btAlgeria.addEventListener("click", alegria)
btRaiva.addEventListener("click", raiva)
btTristeza.addEventListener("click", tristeza)
btNojinho.addEventListener("click", nojinho)

//FUNÇAO 
function alegria (){
    imagem.src='images/02.png'
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