function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}


console.log(soma())
console.log(soma(2,6,6,4))
console.log(soma('a','b','c'))