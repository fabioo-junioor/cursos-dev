function tratar_erro(erro){
    //throw 10
    throw 'Mensagem '
}

function imprimir_nome(obj){
    try{
        console.log(obj.nome.toUpperCase()+'!!!')
    
    }catch(e){
        tratar_erro(e)

    }
}
const obj = { nome: 'Roberto' }
imprimir_nome(obj)