const carrinho = [
    {nome: 'caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'caderno', qtde: 5, preco: 15, fragil: false},
    {nome: 'lapis', qtde: 3, preco: 5.82, fragil: true},
    {nome: 'tessoura', qtde: 1, preco: 19.20, fragil: false}
]

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el) =>{
        const novaQtde = acc.qtde +1
        const novoTotal = acc.total + el
        return{
            qtde: novaQtde, 
            total: novoTotal, 
            media: novoTotal / novaQtde    
        }
    }, {qtde: 0, total: 0, media: 0})

    console.log(media)