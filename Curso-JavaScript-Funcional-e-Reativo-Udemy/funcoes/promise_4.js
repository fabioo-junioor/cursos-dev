function gerarNumeros(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }
        return new Promise(resolve => {
            setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)

        }, tempo)
    })

}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeros(1, 60, 2000),
        gerarNumeros(1, 60, 6000),
        gerarNumeros(1, 60, 1000),
        gerarNumeros(1, 60, 1500)

    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))