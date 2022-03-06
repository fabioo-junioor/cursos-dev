<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Diretiva v-text'"></p>
    <p v-html="'Diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque:fundo.atrasar="'lightblue'">Diretiva Personalizada</p>
    <p v-destaque="cor">Diretiva Personalizada</p>
    <hr />
    <p v-destaque-local:fundo.atrasar.alternar="{cor1:'green', cor2: 'red', atraso: 2000, intervalo: 200}"
		>Diretiva Personalizada</p>
    <p v-destaque-local.atrasar="{cor1:'red', atraso: 5000}"
			>Diretiva Personalizada</p>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
		  const aplicarCor = cor => {
			  if (binding.arg === "fundo") {
				el.style.backgroundColor = cor;

			  } else {
				el.style.color = cor;

			  }
		  }

        let atraso = 0;
        if (binding.modifiers["atrasar"]) {
          atraso = 3000;
		  
        }
		let cor1 = binding.value.cor1
		let cor2 = binding.value.cor2
		let corAtual = cor1

        setTimeout(() => {
		    if (binding.modifiers["alternar"]) {
        		atraso = binding.value.atraso;
				setInterval(() => {
					corAtual = corAtual === cor1 ? cor2 : cor1
					aplicarCor(corAtual)
					
				}, binding.value.intervalo)
			}else{
				aplicarCor(binding.value.cor1)

			}
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "red",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
