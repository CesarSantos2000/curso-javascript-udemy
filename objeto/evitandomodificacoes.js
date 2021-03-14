// Object.preventExtenxions
const produto = Object.preventExtensions({
    nome: 'Qualwuer', preco: 1.99, tag: 'Promoção'
})
console.log('Extencivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Maria', idade: 96 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 100
console.log(pessoa)