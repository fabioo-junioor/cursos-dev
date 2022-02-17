function bomDia(){
    console.log('bom dia')

}
const boaTarde = function(){
    console.log('boa tarde')
    
}

function executar(fn){
    if( typeof fn == 'function'){
        fn()
    }

}
executar(bomDia)


function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }

}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(3)(4))