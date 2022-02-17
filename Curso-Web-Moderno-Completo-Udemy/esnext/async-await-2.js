function gerar_numero_entre(min, max, numeros_proibidos) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numeros_proibidos.includes(aleatorio)) {
            reject('Numeros repetidos!')

        } else {
            resolve(aleatorio)

        }
    })
}

async function gerar_mega_sena(qtd_numeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtd_numeros).fill()) {
            numeros.push(await gerar_numero_entre(1, 60, numeros))
        }
        return numeros

    } catch (e) {
        if (tentativas > 100) {
            throw "que chato!!"
        } else {
            return gerar_mega_sena(qtd_numeros, tentativas = 1)
        }
    }
}

gerar_mega_sena(20)
    .then(console.log)
    .catch(console.log)