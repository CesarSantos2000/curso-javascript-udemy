const pessoa = {
    nome: 'Maria',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'datadenascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}
)

pessoa.datadenascimento = '01/02017'
console.log(pessoa.datadenascimento)
console.log(Object.keys(pessoa))

// object assigned (Ecmascrpt 2019)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 10
console.log(obj)