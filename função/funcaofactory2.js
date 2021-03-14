function criarproduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarproduto('notebook', 2350))
console.log(criarproduto('ipad', 1350))