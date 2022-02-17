const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2

//console.log(nums.map(dobro))

/************************************************* */

const nomes = ['ana', 'bia', 'fabio']
const primeiraLetra = text => text[0]

//console.log(nomes.map(primeiraLetra))

/************************************************* */

const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99},
    {nome: 'caderno', qtde: 5, preco: 15},
    {nome: 'lapis', qtde: 3, preco: 5.82}
]

//const getNome = itens => itens.nome
//console.log(carrinho.map(getNome))

//const getTotal = itens => itens.qtde * itens.preco
//const totais = carrinho.map(getTotal)
//console.log(totais)

/************************************************* */

Array.prototype.meuMap = function(fn){
    const mapped = []
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(result)
        
    }
    return mapped
}
const getNome = itens => itens.nome
console.log(carrinho.meuMap(getNome))

const getTotal = itens => itens.qtde * itens.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)