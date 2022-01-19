//  pessoa -> 123 -> {...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)


//  pessoa -> {456} -> {...}
//pessoa = {nome: 'ana'}

Object.freeze(pessoa)

pessoa.nome = 'maria'

console.log(pessoa)
console.log(pessoa.nome)