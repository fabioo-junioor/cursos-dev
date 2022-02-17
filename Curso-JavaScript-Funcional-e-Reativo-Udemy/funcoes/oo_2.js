class Produto{
    constructor(nome, preco, desc){
        this._nome = nome
        this._preco = preco
        this.desc = desc
    }

    get nome(){
        return `Produto: ${this._nome}`
    }

    get precoFinal(){
        return this.preco * (1 - this.desc)
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }
}

const p1 = new Produto('carro', 10000, 0.4)
p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1._preco)
console.log(p1.precoFinal)