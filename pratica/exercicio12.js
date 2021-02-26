function removerpropriedade(objeto, propriedade){
            const objeto2 = Object.assign({}, objeto)
            delete objeto2[propriedade]        
    console.log(objeto2)
}
removerpropriedade({a: 5, b:8}, 'a')
removerpropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")