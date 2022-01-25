let p = new Promise(function(cumprirPromise){
    cumprirPromise(['fabio', 'junior', 'carlos'])
})


p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinusc => console.log(letraMinusc))