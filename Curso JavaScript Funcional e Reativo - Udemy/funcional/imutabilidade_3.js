const pessoa = Object.freeze({
    nome: 'maria',
    altura: 1.76,
    cidade: 'sao paulo',
    end: Object.freeze({
        rua: 'avenida'
    })
})

const outraPessoa = pessoa

// atribuição por referencia (função pura)
function alterarPessoa(pessoa){
    const novaPessoa = {...pessoa}
    novaPessoa.nome = 'joao'
    novaPessoa.cidade = 'fortaleza'
    novaPessoa.end.rua = 'abc'
    return novaPessoa

}

const novaPessoa = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)
console.log(outraPessoa)

let a = 3
let b = a // atribuição por valor (copia!)