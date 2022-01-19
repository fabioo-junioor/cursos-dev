<template>
  <div id="app">
      <h1>Problema de MontyHall</h1>
      <div class="form">
          <div v-if="!started">
              <label for="portsAmount">Quantas portas? </label>
              <input type="text" id="portsAmount" size="3" placeholder="0"
              v-model.number="portsAmount">
          </div>
          <div v-if="!started">
              <label for="selectedPort">Qual portas é premiada? </label>
              <input type="text" id="selectedPort" size="3"
              v-model.number="selectedPort">
          </div>
          <button v-if="!started" @click="started = true">Iniciar</button>
          <button v-if="!started" @click="started = true">Reiniciar</button>
      </div>
      <div class="doors" v-if="started">
          <div v-for="i in portsAmount" :key="i">
              <Door :hasGift="i == selectedPort" :number="i" />
          </div>
      </div>
  </div>
</template>

<script>
import Door from './components/Door'
export default {
    name: 'App',
    components: {Door},
    data: function() {
        return{
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
body{
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));

}
#app{
    display: flex;
    flex-direction: column;
    align-items: center;

}
#app h1{
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.342);
    padding: 20px;
    margin-bottom: 60px;
    color: white;

}
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

}
.form, .form input, .form button{
    margin-bottom: 10px;
    font-size: 2rem;

}
.doors{
    align-self: stretch;
    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;
}
</style>