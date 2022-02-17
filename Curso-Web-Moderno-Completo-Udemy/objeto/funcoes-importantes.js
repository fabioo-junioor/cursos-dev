const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)

})

Object.defineProperty(pessoa, 'data_nasc', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.data_nasc = '01/01/2017'
console.log(pessoa.data_nasc)
console.log(Object.keys(pessoa))

//  object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)


Object.freeze(obj)
obj.c = 1234
console.log(obj)