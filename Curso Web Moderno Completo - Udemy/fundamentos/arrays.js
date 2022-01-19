const valores = [2,5,6,4,9]
console.log(valores[3])


valores[3] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[2]

console.log(valores)