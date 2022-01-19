function gerar_numero_entre(min, max) {
    if (min > max) {
        [min, max] = [max, min]

    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerar_numero_entre(1, 100)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)