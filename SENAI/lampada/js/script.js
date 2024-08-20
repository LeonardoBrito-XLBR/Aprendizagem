//DOM

//VARIAVEL NOMETEMPORARIO = BUSCAR ARQUIVO PELO NOME
const lampada = document.querySelector('#lamp')
const btligar = document.querySelector('#ligar')
const btdesligar = document.querySelector('#desligar')

//EVENTO

//EVENTO DE MOUSE - O QUE VAI ACONTECER
btligar.addEventListener('click',acender)
btdesligar.addEventListener('click',apagar)
lampada.addEventListener('dblclick', quebrar) //LAMPADA RECEBE 


//FUNÇÃO

//CRIANDO AS FUNÇÕES COM NOMES ACIMA ^^^
function acender(){
    lampada.src='images/acesa.gif' //SUBSTITUIR IMAGEM PELA ACESA
}

function apagar(){
    lampada.src='images/apagada.gif' //SUBSTITUIR IMAGEM PELA APAGAR
}

function quebrar(){
    lampada.src='images/quebrada.jpg'
}