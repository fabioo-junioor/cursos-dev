let a = 4
console.log(a)
    
function bomDia(){
    console.log('bom dia')

}
bomDia()


const boaTarde = function(){
    console.log('boa tarde')

}
boaTarde()

function somar(a, b=0){
    return a+b

}
let resultado = somar(3, 4, 5)
console.log(resultado)

resultado = somar(3)
console.log(resultado)