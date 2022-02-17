function Produto(nome, preco, desc = 0.15){
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function(){
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('caneta', 5)
const p2 = new Produto('lapis', 100)

console.log(p1)
console.log(p2)
console.log(p2.precoFinal())