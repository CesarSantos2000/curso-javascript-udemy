const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasbaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

// Com callback
const notasbaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasbaixas2)

const notasmenorque7 = nota => nota < 7
const notasbaixas3 = notas.filter(notasmenorque7)
console.log(notasbaixas3)