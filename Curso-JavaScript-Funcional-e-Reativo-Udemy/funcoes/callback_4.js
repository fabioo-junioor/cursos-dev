const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99},
    {nome: 'caderno', qtde: 5, preco: 15},
    {nome: 'lapis', qtde: 3, preco: 5.82}
]

const getNome = item => item.nome
const qtdMaiorZero = item => item.qtde > 5
const muitoGrande = item => item.qtde > 1000


const result = carrinho
    .filter(muitoGrande)
    .map(getNome)
console.log(result)


Array.prototype.meuFilter = function(fn){
    const novoArray = []

    for(let i=0; i<this.length; i++){
        if(fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const nomeItem = carrinho
    .meuFilter(qtdMaiorZero)
    .map(getNome)

console.log(nomeItem)