//DOM = PEGAR OS ELEMENTOS HTML

const distancia = document.querySelector("#distancia")
const consumo = document.querySelector("#consumo")
const preco = document.querySelector("#preco")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

// EVENTOS = QUANDO TAL COISA ACONTECER
botao.addEventListener('click', calcular)


//FUNÇÃO = REALIZAR ALGUMA OPERAÇÃO
 function calcular (){
    d = Number (distancia.value)
    c = Number (consumo.value)
    p = Number (preco.value)

    total = (d/c) * p
    
    resultado.textContent = `Seu preço total a pagar vai ser: R$${total.toFixed(2)}`
    
 }

