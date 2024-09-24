//DOM

//BOTÃO PERSONALIZADO
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('toggleButton');
    const audio = document.getElementById('audio');
    
    let isPlaying = false;

    button.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            button.textContent = 'Iniciar Música';
        } else {
            audio.play();
            button.textContent = 'Parar Música';
        }
        isPlaying = !isPlaying;
    });
});
//BOTÃO PERSONALIZADO

const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const saudacao = document.querySelector('#saudacao')

//EVENTO

setInterval(relogio, 1000) // 1segundo = 1000

//FUÇÃO

function relogio(){
    //let é uma variavel que muda
    let hoje = new Date () // HOJE é tudo de New Date
    let h = hoje.getHours() // H so pega do HOJE a hora
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()
    let d = hoje.getDate()
    let me = hoje.getMonth()+1
    let y = hoje.getFullYear()

    if (h<10){
        h="0"+h
    }
    if (m<10){
        m="0"+m
    }
    if (s<10){
        s="0"+s
    }

    if (me<10){
        me='0'+me
    }

    if (h>= 5 && h<12){
        saudacao.textContent = 'Bom Dia'
        document.querySelector('.data').style.backgroundColor = 'yellow' 
    }else if (h>=12 && h<18){
        saudacao.textContent = 'Boa Tarde'

        document.querySelector('body').style.backgroundColor = 'yellow'
    } else {
        saudacao.textContent = 'Boa noite'
    }

    //.textContent altera o valor da variavel
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s


    dia.textContent = d
    mes.textContent = me
    ano.textContent = y
}