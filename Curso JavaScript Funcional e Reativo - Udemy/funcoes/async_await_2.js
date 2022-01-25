function gerarNumeros(min, max, numerosNot) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosNot.includes(aleatorio)) {
            reject('Numeros repetidos!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMega(qtdNum) {
    try {
        const numeros = []
        for (let _ of Array(qtdNum).fill()) {
            numeros.push(await gerarNumeros(1, 100, numeros))
        }
        return numeros
    } catch (e) {
        throw "Nao foi dessa vez..."
    }
}

gerarMega(10)
    .then(console.log)
    .catch(console.log)