// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Maria'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Pedro'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa)

const pessoaconstante = Object.freeze({nome: 'Solange'})
pessoaconstante.nome = 'Sofia'
console.log(pessoaconstante)