const carrinho = [
    '{"Nome": "Borracha", "Preco": 3.45}',
    '{"Nome": "Caderno", "Preco": 13.90}',
    '{"Nome": "Kit de lapis", "Preco": 41.25}',
    '{"Nome": "caneta", "Preco": 7.50}'
]

const paraobjeto = json => JSON.parse(json)
const parapreco = produto => produto.preco
const resultado = carrinho.map(paraobjeto).map(parapreco)

console.log(resultado)