const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1250.98,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivogerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo com sucesso!')
})