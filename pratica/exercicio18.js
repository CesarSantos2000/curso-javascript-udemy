function somacusto(valor) {
    let somatotal = 0
    let numerico
    for (i in valor) {
        for (c in valor[i]) {
            numerico = typeof valor[i][c]
            if (numerico == 'number') {
                somatotal += valor[i][c]
            }
        }
    }
    console.log(somatotal)
}

somacusto([{ nome: "Jornal online", categoria: "Informação", preco: 89.99 },
{ nome: "Cinema", categoria: "Entretenimento", preco: 150 }])
somacusto([
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]) 