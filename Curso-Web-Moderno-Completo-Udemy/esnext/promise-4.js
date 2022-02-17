function gerar_numero_entre(min, max, tempo) {
    if (min > max) {
        [min, max] = [max, min]

    }
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)

    })
}

function gerar_varios_numeros() {
    return Promise.all([
        gerar_numero_entre(1, 60, 4000),
        gerar_numero_entre(1, 60, 1000),
        gerar_numero_entre(1, 60, 500),
        gerar_numero_entre(1, 60, 3000),
        gerar_numero_entre(1, 60, 100),
        gerar_numero_entre(1, 60, 1500)
    ])
}


console.time('promise')

gerar_varios_numeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })