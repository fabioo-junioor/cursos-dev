function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

/*
esperarPor(3000)
    .then(() => console.log('Exec promise 1...'))
    .then(() => esperarPor())
    .then(() => console.log('Exec promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Exec promise 3...'))
*/

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1000)
    console.log(`Async ${valor}...`)

    await esperarPor(1000)
    console.log(`Async ${valor +1}...`)

    await esperarPor(1000)
    console.log(`Async ${valor +2}...`)

    return valor +3

}
executar()
    .then(console.log)