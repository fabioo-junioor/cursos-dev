// Os dois tipos...
// 1. Operadores de Criação
const { from, of } = require('rxjs')

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require('rxjs/operators')

of(1, 2, 'ana', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)

    )
    .subscribe(function(valor){
        console.log(valor)

    })