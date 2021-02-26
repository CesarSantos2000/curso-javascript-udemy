Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirresultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra!')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação!')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota invalida!')
    }
}

imprimirresultado(10)
imprimirresultado(7.8)
imprimirresultado(5.6)
imprimirresultado(1.5)
imprimirresultado(-1)
imprimirresultado(11)