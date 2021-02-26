function intervalo(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo)
        return numero >= minimo && numero <= maximo
    return numero > minimo && numero < maximo
}

console.log(intervalo(10, 100, 50))
console.log(intervalo(16, 100, 160))
console.log(intervalo(3, 150, 3))
console.log(intervalo(3, 150, 3, true))