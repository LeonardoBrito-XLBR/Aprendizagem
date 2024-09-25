// MUDAR O FUNDO QUANDO APERTA UM BOTAO


const opcao1 = document.querySelector("#botao1")
const opcao2 = document.querySelector("#botao2")
const opcao3 = document.querySelector("#botao3")


opcao1.addEventListener('click', foto1)
opcao2.addEventListener('click', foto2)
opcao3.addEventListener('click', foto3)

function foto1 (){
    document.body.style.backgroundImage = "url('Images/01.jpg')";

}

function foto2 (){
    document.body.style.backgroundImage = "url('Images/02.jpeg')";
}

function foto3 (){
    document.body.style.backgroundImage = "url('Images/03.jpg')";
}