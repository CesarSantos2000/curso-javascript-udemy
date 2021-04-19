const alunos = [
    {nome: 'Maria', nota:7.3, bolsista: false},
    {nome: 'Pedro', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsita:true},
    {nomw: 'João', nota: 8.5, bolsista: false}
]

const todosbolsistas = (resultado, bolsista) => resultado && bolsista
const algumbolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))
console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))