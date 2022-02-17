const soma = function(x,y){
    return x+y
}

const imprimir_result = function(a,b, op = soma){
    console.log(op(a,b))
}

imprimir_result(3,4)
imprimir_result(3,4,soma)
imprimir_result(3,4,function(x,y){
    return x-y
})
imprimir_result(3,4,(x,y) => x*y)


const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}
pessoa.falar()