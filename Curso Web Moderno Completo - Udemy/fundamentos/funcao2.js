//armazenar uma funcao em uma variavel
const imprime_soma = function(a,b){
    console.log(a+b)

}
imprime_soma(2,3)


//armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b

}
console.log(soma(2,4))


//retorno implicito
const subtracao = (a,b) => a-b

console.log(subtracao(6,3))