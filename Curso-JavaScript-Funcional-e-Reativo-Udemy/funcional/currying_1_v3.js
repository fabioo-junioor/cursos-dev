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

function aplicarValidacao(fn, valor){
    return function (valor){
        try{
            fn(valor)
        }catch(e){
            return {
                error: e
            }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanho(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('nome invalido!')
const validaNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = {
    nome: 'a',
    preco: 14.50,
    desc: 0.25
}
const p2 = {
    nome: 'b',
    preco: 14.50,
    desc: 0.25
}

console.log(validaNomeProduto(p1.nome))
console.log(validaNomeProduto(p2.nome))