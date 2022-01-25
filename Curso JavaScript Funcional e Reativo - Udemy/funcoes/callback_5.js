const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99},
    {nome: 'caderno', qtde: 5, preco: 15},
    {nome: 'lapis', qtde: 3, preco: 5.82},
    {nome: 'tessoura', qtde: 1, preco: 19.20}
]

const getTotal = item => item.qtde * item.preco
const somar = (acumulador, elemento) =>  acumulador + elemento


const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar, 0)


console.log(totalGeral)

Array.prototype.meuReduce = function(fn, inicio){
    let acc = inicio
    for(let i=0; i<this.length; i++){
        if(!acc && i===0){
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const totalGeral2 = carrinho
    .map(getTotal)
    .meuReduce(somar, 0)


console.log(totalGeral2)