function get_inteiro_aleatorio(min, max){
    const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
}

let op = 0

while(op != -1){
    op = get_inteiro_aleatorio(-1, 10)
    console.log(`Op escolhida ${op}`)
}