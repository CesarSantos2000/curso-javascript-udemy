function primeiroeultimo(valor){
    const primeiro = 0
    const ultimo = valor.length - 1
    const primeiroelemento = valor[primeiro]
    const ultimoelemento = valor[ultimo]
    primeiroultimo = [primeiroelemento, ultimoelemento]
    return primeiroultimo
}

console.log(primeiroeultimo([5, 4, 7, 8]))