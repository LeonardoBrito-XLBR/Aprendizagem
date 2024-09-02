//DOM

const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')

//EVENTO

setInterval(relogio, 1000) // 1segundo = 1000

//FUÇÃO

function relogio(){
    //let é uma variavel que muda
    let hoje = new Date () // HOJE é tudo de New Date
    let h = hoje.getHours() // H so pega do HOJE a hora
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()

    if (h<10){
        h="0"+h
    }
    if (m<10){
        m="0"+m
    }
    if (s<10){
        s="0"+s
    }

    //.textContent altera o valor da variavel
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
}