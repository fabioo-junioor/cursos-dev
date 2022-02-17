const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)

})

aprovados.forEach(nome => console.log(nome))

const exibir_aprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibir_aprovados)