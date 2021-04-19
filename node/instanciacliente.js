const instanciaA = require('./instanciaunica')
const instanciaB = require('./instanciaunica')

instanciaA.inc()
instanciaB.inc()

console.log(instanciaB.valor, instanciaA.valor)

const instanciaC = require('./instancianova')()
const instanciaD = require('./instancianova')()

instanciaC.inc()
instanciaC.inc()
console.log(instanciaC.valor, instanciaD.valor)