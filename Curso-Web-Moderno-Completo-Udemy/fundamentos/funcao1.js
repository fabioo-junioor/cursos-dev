//funcao sem retorno
function imprimir_soma(a, b){
    console.log(a+b)

}

imprimir_soma(2,3)
imprimir_soma(3)
imprimir_soma(2,23,6,5,4)

//funcao com retorno
function soma(a, b=1){
    return a+b

}

console.log(soma(2,6))
console.log(soma(2))