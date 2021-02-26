const notas = [6.7, 4.3, 8.5, 9.4, 7.4]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    Nome: 'Mc bionica',
    altura: 1.54,
    peso: 52,
    idade: 10
}
for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`)
}