class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()


const criar_pessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criar_pessoa('joao')
p2.falar()