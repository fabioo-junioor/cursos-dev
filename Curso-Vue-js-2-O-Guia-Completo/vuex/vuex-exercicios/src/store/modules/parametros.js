export default{
    state: {
        quantidade: 1,
        preco: 10

    },
    mutations: {
        setQuantidade(state, payload){
            state.quantidade = payload

        },
        setPreco(state, payload){
            state.preco = payload
            
        }
    }
}