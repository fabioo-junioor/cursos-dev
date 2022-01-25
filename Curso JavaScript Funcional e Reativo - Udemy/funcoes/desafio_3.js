const fs = require('fs')
const path = require('path')
const { resolve } = require('path/posix')



function lerA(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerA(caminho)
    .then(conteudo => console.log(conteudo))