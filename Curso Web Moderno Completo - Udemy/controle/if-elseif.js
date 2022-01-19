Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimir_resultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperacao')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Invalida')
    }
}


imprimir_resultado(9.5)
imprimir_resultado(8)
imprimir_resultado(5)
imprimir_resultado(2)
imprimir_resultado(-2)