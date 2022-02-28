<template>
  <div id="app">
    {{titulo}}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: 'Teste'
    }
  }
}
</script>

<style>
  #app{
    background-color: aquamarine;
    color: brown;
    font-size: 2rem;

  }
</style>