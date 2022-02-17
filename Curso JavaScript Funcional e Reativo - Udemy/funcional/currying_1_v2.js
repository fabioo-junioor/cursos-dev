function textoComTamanho(min){
    return function (max){
        return function (erro){
            return function (texto){
                const tamanho = (texto || '').trim().length
                if(tamanho < min || tamanho > max){
                    throw erro
                    
                }
            }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanho(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('nome invalido!')

const p1 = {
    nome: 'a',
    preco: 14.50,
    desc: 0.25
}

forcarTamanhoPadrao(p1.nome)