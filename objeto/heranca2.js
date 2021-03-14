// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // Não faça isso

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velatual: 0,
    velmax: 200,
    acelerarmais(delta){
        if(this.velatual <= velmax){
            this.velatual += delta
        } else{
            this.velatual = this.velmax
        }
    },
    status(){
        return `${this.velatual}Km/h de ${this.velmax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velmax: 340
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(300)
console.log(ferrari.status())