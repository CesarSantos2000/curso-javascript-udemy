const ferrari = {
    modelo: 'f40',
    velmax: 340
}

const volvo = {
    modelo: 'v40',
    velmax: 240
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuobjeto() {}

console.log(typeof meuobjeto, typeof Object)
console.log(Object.prototype, meuobjeto.prototype)