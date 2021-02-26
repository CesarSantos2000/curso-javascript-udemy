function objetoarray(objeto){
    const chave = []
    for(let i in objeto){
        chave.push([i, objeto[i]])
    }
    console.log(chave)
}
objetoarray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })
objetoarray({
        codigo: 11111,
        preco: 12000
        })