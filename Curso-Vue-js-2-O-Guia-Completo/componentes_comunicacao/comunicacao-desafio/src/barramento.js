import Vue from 'vue'
export default new Vue({
    methods: {
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionando', usuario)

        },
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)

        }
    }
})