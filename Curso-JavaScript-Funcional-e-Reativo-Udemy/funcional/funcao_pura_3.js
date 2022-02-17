// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

let qtdExec = 0

// função pura!
function somar(a, b){
    qtdExec++ // efeitos colaterais
    return a + b

}

console.log(qtdExec)
console.log(somar(4, 6))
console.log(somar(4, 234))
console.log(somar(54, 236))
console.log(qtdExec)