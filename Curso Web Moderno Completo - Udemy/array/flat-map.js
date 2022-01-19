const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const get_nota_aluno = aluno => aluno.nota
const get_notas_turma = turma => turma.alunos.map(get_nota_aluno)

const notas1 = escola.map(get_notas_turma)
console.log(notas1)

Array.prototype.flat_map = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flat_map(get_notas_turma)
console.log(notas2)