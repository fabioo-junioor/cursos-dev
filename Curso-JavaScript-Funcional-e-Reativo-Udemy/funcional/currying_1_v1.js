function textoComTamanho(min, max, erro, texto){
    const tamanho = (texto || '').trim().length

    if(tamanho < min || tamanho > max){
        throw erro

    }
}
const p1 = {
    nome: 'a',
    preco: 14.50,
    desc: 0.25
}
textoComTamanho(4, 255, 'nome invalido!', p1.nome)