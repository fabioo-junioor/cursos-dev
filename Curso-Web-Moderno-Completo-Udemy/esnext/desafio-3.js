const fs = require('fs')
const path = require('path')

function ler_arquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}


const caminho = path.join(__dirname, 'dados.txt')

ler_arquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `valor fial e: ${conteudo}`)
    .then(console.log)