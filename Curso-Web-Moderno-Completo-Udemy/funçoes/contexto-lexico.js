const valor = 'Global'

function minha_funcao(){
    console.log(valor)
    
}

function exec(){
    const valor = 'Local'
    minha_funcao()

}

exec()