const modulo_a = require('../../modulo-a')
console.log(modulo_a.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

/*
const c = require('./pasta-c/index')
console.log(c.ola2)
*/

const http = require('http')
http.createServer((req, res)=>{
    res.write('bom dia')
    res.end
}).listen(8080)