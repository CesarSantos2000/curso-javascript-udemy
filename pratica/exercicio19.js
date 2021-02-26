function calcularmedia(valor) {
    let media = 0
    let soma = 0
    for (i in valor) {
        soma += valor[i]
    }
    media = soma / valor.length
    console.log(media.toFixed(2))
}
calcularmedia([0, 10])
calcularmedia([4, 5, 7, 9, 10, 7, 2])
calcularmedia([1, 2, 3, 4, 5])