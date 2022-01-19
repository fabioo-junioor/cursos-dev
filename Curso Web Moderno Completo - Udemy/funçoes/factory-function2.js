function criar_produto(nome_prod, preco_prod){
    return{
        nome: nome_prod,
        preco: preco_prod,
        desconto: 0.1
    }
}

console.log(criar_produto('açucar', 15))
console.log(criar_produto('cafe', 9.5))