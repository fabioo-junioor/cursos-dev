//  object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 2, 
    tag: 'promoçao'
})
console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha escolar'
delete produto.tag
console.log(produto)


//  object.seal
const pessoa = {
    nome: 'juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//  object.freeze