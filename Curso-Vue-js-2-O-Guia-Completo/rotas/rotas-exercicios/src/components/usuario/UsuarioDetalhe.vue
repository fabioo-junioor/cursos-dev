<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <p><strong>Codigo: </strong>{{id}}</p>
    <!--
    <router-link primario 
        tag="button" 
        :to="`/usuario/${id}/editar`">Editar</router-link>
    -->
    <router-link primario
        tag="button"
        :to="{name: 'editarUsuario', params: {id},
            query: {completo: true, lingua: 'pt'},
            hash: '#rodape'}"
        >Editar</router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next){
        console.log('dentro do componente -> usuario detalhe')
        next(vm => {
            console.log(vm.id)
        })
    }
    /*
    data(){
        return{
            id: this.$route.params.id

        }
    },
    watch: {
        $route(to, from){
            this.id = to.params.id

        }
    },
    */
}
</script>

<style>

</style>