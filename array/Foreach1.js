const aprovados = ['Cesar', 'Lazaro', 'Ericson', 'Eriston']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = nome => console.log(nome)
aprovados.forEach(exibiraprovados)