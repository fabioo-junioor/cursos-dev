<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible
			v-for="mensagem in mensagens" 
			:key="mensagem.texto"
			:variant="mensagem.tipo">{{mensagem.texto}}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Informe o Email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
				size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios"
				size="lg" variant="success"
				class="ml-2">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios"
				:key="id">
				<strong>Nome: </strong>{{usuario.nome}}<br>
				<strong>Email: </strong>{{usuario.email}}<br>
				<strong>ID: </strong>{{id}}<br>
				<b-button @click="carregar(id)"
					size="lg"
					variant="warning">Carregar</b-button>
				<b-button @click="excluir(id)"
					size="lg"
					variant="danger"
					class="ml-2">Excluir</b-button>
				</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data(){
		return{
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []

		},
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}

		},
		salvar(){
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuario${finalUrl}`, this.usuario)
				.then(_ => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})
				})
		},
		excluir(id){
			this.$http.delete(`/usuario/${id}.json`)
				.then(_ => this.limpar())
				.catch(_ => {
					this.mensagens.push({
						texto: 'Problema para excluir!',
						tipo: 'danger'
					})
				})
		},
		obterUsuarios(){
			this.$http.get('usuario.json')
				.then(res => {
					this.usuarios = res.data
					console.log(res.data)
				})

			//this.axios.defaults.headers.common['Authorization'] = '123'
		}
	}
	/*
	created(){
		this.$http.post('usuario.json', {
			nome: 'Maria',
			email: 'maria@gmail.com'
		}).then(res => console.log(res))
	}
	*/
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
