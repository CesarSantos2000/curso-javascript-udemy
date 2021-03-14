function meuobjeto(){}
console.log(meuobjeto.prototype)

const obj1 = new meuobjeto
const obj2 = new meuobjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === meuobjeto.prototype)

meuobjeto.prototype.nome = 'Anônimo'
meuobjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}¹`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuobjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...

console.log((new meuobjeto).__proto__ === meuobjeto.prototype)
console.log(meuobjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)