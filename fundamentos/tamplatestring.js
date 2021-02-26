const nome = 'Rebeca'
const concatenação = 'olá ' + nome + '!'
const tamplate = `
    Olá
    ${nome}!`

console.log(concatenação)
console.log(tamplate)

//expressões...
console.log(` 1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...  ${up('cuidado')}!`)