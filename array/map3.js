//Implementadno map
Array.prototype.map2 = function(callback){
    const novoarray = []
    for(let i =0; i < this.length; i++){
        novoarray.push(callback(this[i], i, this))
    }
    return novoarray
}

const carrinho = [
    '{"Nome": "Borracha", "Preco": 3.45}',
    '{"Nome": "Caderno", "Preco": 13.90}',
    '{"Nome": "Kit de lapis", "Preco": 41.25}',
    '{"Nome": "caneta", "Preco": 7.50}'
]

const paraobjeto = json => JSON.parse(json)
const parapreco = produto => produto.preco
const resultado = carrinho.map2(paraobjeto).map2(parapreco)

console.log(resultado)