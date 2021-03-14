//coleção dinamica chave valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 150

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo : 'Audi',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua Abc',
            numero: 25
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularvalordoseguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularvalordoseguro

console.log(carro)
console.log(carro.condutores)
/*console.log(carros.condutores.lengh)/ erro */