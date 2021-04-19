const produtos = [
    {bome: 'Notebook', valor: 2499, fragil: true},
    {nome: 'ipod', valor: 4999, fragil: true},
    {nome: 'Copo de vidro', valor: 12.99, fragil: true},
    {nome: 'copo de plástico', valor: 11.50, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.valor > 1000
}))

const caro = p => p.valor >= 500
const fragil = p => p.fragil == true

console.log(produtos.filter(caro).filter(fragil))