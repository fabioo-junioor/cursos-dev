const { functions } = require("lodash")

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

/*
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))
*/

function retornar_valor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function executar() {
    let valor = await retornar_valor()

    await esperarPor(2000)
    console.log(`async/await ${valor}...`)

    await esperarPor(2000)
    console.log(`async/await ${valor + 1}...`)

    await esperarPor(2000)
    console.log(`async/await ${valor + 2}...`)

    return valor + 3
}

async function executar_verdade(){
    const valor = await executar()
    console.log(valor)

}

executar_verdade()