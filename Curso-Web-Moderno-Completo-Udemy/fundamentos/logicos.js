function compras(trab1, trab2){
    const comprar_sorvete = trab1 || trab2
    const comprar_tv_50 = trab1 && trab2
    //const comprar_tv_32 = !!(trab1 ^ trab2)
    const comprar_tv_32 = trab1 != trab2
    const manter_saudavel = !comprar_sorvete

    return{ comprar_sorvete, comprar_tv_50, comprar_tv_32, manter_saudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))