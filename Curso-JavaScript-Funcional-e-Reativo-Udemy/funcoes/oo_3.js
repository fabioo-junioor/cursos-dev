function Produto(nome, preco, desc = 0.15){
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function(){
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} - Preco: ${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function(){
        return this._desc
    },
    set: function(novoDesc){
        if(novoDesc >= 0 && novoDesc <= 1){
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function(){
        return `${this._desc * 100}%`
    }
})

const p1 = new Produto('caneta', 5)
const p2 = new Produto('lapis', 100)

//console.log(p1)
//p1.log()
p2.desc = 0.9
console.log(p2.desc)
console.log(p2.descString)
//console.log(p2.precoFinal())