const notas = [6,9,5,8,3,1,7]

//com callback
let notas_baixas = []
for(let i in notas){
    if(notas[i]<7){
        notas_baixas.push(notas[i])
    }
}

console.log(notas_baixas)


//sem callback
notas_baixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notas_baixas)

notas_baixas = notas.filter(nota => nota < 7)
console.log(notas_baixas)