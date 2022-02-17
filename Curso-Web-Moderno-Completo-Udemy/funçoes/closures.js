// closures é o escopo criado quando uma funçao é declarada
// esse escopo permite a funçao acessar e manipular variaveis externas a funçao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}


const minha_funcao = fora()
console.log(minha_funcao())