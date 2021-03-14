function aula(nome, videoid) {
    this.nome = nome,
        this.videoid = videoid
}

const aula1 = new aula('Bem vindos!', 123)
const aula2 = new aula('Até breve', 456)
console.log(aula1, aula2)

// Simulando o new
function novo(f, ...param) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, param)
    return obj
}

const aula3 = novo(aula, 'Bem vindos!', 123)
const aula4 = novo(aula, 'Até breve', 456)
console.log(aula3, aula4)