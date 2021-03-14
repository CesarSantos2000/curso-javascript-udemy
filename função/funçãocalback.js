const fabricantes = ['Mercedes', 'Audi', 'BMw']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))