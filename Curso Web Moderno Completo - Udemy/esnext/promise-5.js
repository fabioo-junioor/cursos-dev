function fuincionar_ou_nao(valor, chance_erro) {
    return new Promise((resolve, reject) => {
        try {
            console.log('temp')
            if (Math.random() < chance_erro) {
                reject('Ocorreu um erro...')

            } else {
                resolve(valor)
            }

        } catch (e) {
            reject(e)
        }
    })
}

fuincionar_ou_nao('testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        //err => console.log(`Erro.: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim...'))