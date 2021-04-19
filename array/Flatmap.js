const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.2
    }]
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'Gabriel',
        nota: 8.5
    },{
        nome: 'Janaina', 
        nota: 9.9
    }]
}
]

const getnotadosalunos = aluno => aluno.nota
const getnotasdaturma = turma => turma.alunos.map(getnotadosalunos)

const notas1 = escola.map(getnotasdaturma)
console.log(notas1)

console.log([].concat([ 8.1, 9.2 ], [ 8.5, 9.9 ]))

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getnotasdaturma)
console.log(notas2)