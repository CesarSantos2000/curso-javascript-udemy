const filter2 = function(callback){
    novoarray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            novoarray.push(this[i])
        }
    }
    return novoarray
}




const produtos = [
    {bome: 'Notebook', valor: 2499, fragil: true},
    {nome: 'ipod', valor: 4999, fragil: true},
    {nome: 'Copo de vidro', valor: 12.99, fragil: true},
    {nome: 'copo de plástico', valor: 11.50, fragil: false}
]

const caro = p => p.valor >= 500
const fragil = p => p.fragil == true

console.log(produtos.filter(caro).filter(fragil))