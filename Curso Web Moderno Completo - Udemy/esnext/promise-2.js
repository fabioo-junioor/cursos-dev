setTimeout(function () {
    console.log('executando callbak...')

    setTimeout(function () {
        console.log('executando callbak...')

        setTimeout(function () {
            console.log('executando callbak...')
        }, 2000)

    }, 2000)

}, 2000)

function esperar_por(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperar_por()
    .then(() => esperar_por())
    .then(esperar_por)