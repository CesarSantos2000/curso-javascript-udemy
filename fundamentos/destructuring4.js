function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([20, 64]))
console.log(rand([10, 168]))
console.log(rand([12]))
console.log(rand([, 65]))
console.log(rand([]))
