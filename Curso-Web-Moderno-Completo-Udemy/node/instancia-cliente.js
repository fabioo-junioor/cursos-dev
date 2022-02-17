const contador_a = require('./instancia-unica')
const contador_b = require('./instancia-unica')

const contador_c = require('./instancia-nova')()
const contador_d = require('./instancia-nova')()

contador_a.inc()
contador_a.inc()
console.log(contador_a.valor, contador_b.valor)

contador_c.inc()
contador_c.inc()
console.log(contador_c.valor, contador_d.valor)