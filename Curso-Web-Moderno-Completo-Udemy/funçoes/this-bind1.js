const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falar_de_pessoa = pessoa.falar.bind(pessoa)
falar_de_pessoa()