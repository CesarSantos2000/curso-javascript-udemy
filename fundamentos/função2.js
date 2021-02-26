//Armazenado função emums vsriavel
const imprimirsoma = function (a, b){
    console.log(a+b)
}
imprimirsoma(2, 4)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 8))

//Retorno implicito

const subtracao = (a, b) => a-b
console.log(subtracao(2, 9))

const imprimir2 = a => a
console.log('bacana')