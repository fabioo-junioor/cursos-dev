new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Alerta!')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})