const imprimir_resultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperacao')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Invalida')
    }
}



imprimir_resultado(9)
imprimir_resultado(7)
imprimir_resultado(5)
imprimir_resultado(2)
imprimir_resultado(-1)