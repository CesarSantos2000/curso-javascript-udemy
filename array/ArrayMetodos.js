const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() //Remove o ultimo elemento
console.log(pilotos, '-*-Massa quebrou o carro')

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona na primeira posição
console.log(pilotos)

//Splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa quebrou :(
console.log(pilotos)

const algunspilotos = pilotos.slice(2) //Novo array
console.log(algunspilotos)

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)