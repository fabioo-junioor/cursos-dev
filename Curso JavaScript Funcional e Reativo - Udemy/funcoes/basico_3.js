const bomDia = () => console.log('Bom Dia')
bomDia()

const saudacao = nome => `Ola ${nome} !!`
console.log(saudacao('fabio'))

/************************************************** */
const somar = numeros => {
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar([1,3,5,6,4,89,5,6,5]))

/************************************************** */
const potencia = base => {
    return exp => {
        return Math.pow(base, exp)
    }
}
console.log(potencia(2)(8))

/************************************************** */
// this
Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}

const numeros = [1, 2, 3]
numeros.ultimo()