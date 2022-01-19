class Lancamento{
    constructor(nome = 'generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class Ciclo_financeiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    
    addLancamento(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }
    sumario(){
        let valor_consolidado = 0
        this.lancamento.forEach(l => {
            valor_consolidado += l.valor
        })
        return valor_consolidado
    }
}

const salario = new Lancamento('salario', 45000)
const conta_luz = new Lancamento('luz', -220)

const contas = new Ciclo_financeiro(6, 2018)
contas.addLancamento(salario, conta_luz)
console.log(contas.sumario())