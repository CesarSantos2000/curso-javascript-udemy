function enumerico(valor) {
    let numerico
    let numero = []
    for (let i = 0; i < valor.length; i++) {
        numerico = typeof valor[i]
        if (numerico == 'number') {
            numero.push(valor[i])
        }
    }
    console.log(numero)
}
enumerico(["Javascript", 1, "3", "Web", 20])
enumerico(["a", "c"])