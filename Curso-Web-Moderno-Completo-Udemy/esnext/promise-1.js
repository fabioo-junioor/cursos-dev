const primeiro_elemento = array_ou_string => array_ou_string[0]
const letra_minuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

.then(primeiro_elemento).then(primeiro_elemento)
.then(letra_minuscula).then(console.log)