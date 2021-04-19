const alunos = [
    {nome: 'João', nota: 9.5},
    {nome: 'Lara', nota: 8.7}
]

// Imperativo
let total1 = 0
for(let i =0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/ alunos.length)

//Declarativo
const getnota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getnota).reduce(soma)
console.log(total2/ alunos.length)