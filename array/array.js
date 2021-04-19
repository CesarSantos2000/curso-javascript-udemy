console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Livia', 'Rafael')
console.log(aprovados)

aprovados = ['Thainá', 'Jaine', 'Luan']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Lauane'
aprovados.push('Annelise')
console.log(aprovados.length)

aprovados[9] = 'Bernardo'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Thainá', 'Jaine', 'Luan']
aprovados.splice(1,1)
console.log(aprovados)