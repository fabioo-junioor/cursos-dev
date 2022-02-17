// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14

// impura - pi esta fora da funcção
function areaCirc(raio){
    return (raio * raio) * Math.PI

}

// pura - 
function areaCircPura(raio, PI){
    return (raio * raio) * PI

}
console.log(areaCirc(10))
console.log(areaCircPura(10, Math.PI))