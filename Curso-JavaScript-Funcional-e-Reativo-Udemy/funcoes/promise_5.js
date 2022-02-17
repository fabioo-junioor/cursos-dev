function funcionar(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro){
            reject('Ocorreu um ERRO...')
        }else{
            resolve(valor)
        }
    })
}

funcionar('certo ', 0.5)
    .then(v => console.log(`Valor ${v}`))
    .catch(err => console.log(`ERRO: ${err}`))
    .then(() => console.log('FIM'))