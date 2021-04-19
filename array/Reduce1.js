const alunos = [
    {nome: 'Maria', nota:7.3, bolsista: false},
    {nome: 'Pedro', nota: 9.2, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsita:true},
    {nomw: 'João', nota: 8.5, bolsista: false}
]

console.log(alunos.map(a => a.nota))
let resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)