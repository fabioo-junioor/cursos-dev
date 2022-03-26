import stocks from '../../data/stocks'

export default {
    state: {
        stocks: []

    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks

        },
        randomizeStock(state){
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.42))

            });
        }
    },
    actions: {
        buyStock({commit}, order){
            commit('buyStock', order)

        },
        initStocks({commit}){
            commit('setStocks', stocks)

        },
        randomizeStocks({commit}){
            commit('randomizeStock')

        }
    },
    getters: {
        stocks(state){
            return state.stocks
            
        }
    }
}