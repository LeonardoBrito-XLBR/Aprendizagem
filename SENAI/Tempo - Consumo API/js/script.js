// DOM
const cidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const texto_cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao')
const chave = '37cd99d4f41178a3c5d4464c1b9e550f'

//EVENTO
botao.addEventListener('click', buscar)


//FUNCAO
async function buscar (){
    nome_cidade = cidade.value

                //espere
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${chave}&units=metric&lang=pt_br`)
        .then(resposta=>resposta.json()) //PEGA OS DADOS EM C# E TRADUZA PARA UM ARQUIVO.JSON

    console.log(dados) // DADOS RECEBIDOS EM C#
}