const escola = 'cod3r'

console.log(escola.charAt(4)) //Mostra o caracter no indice informado na função.
console.log(escola.charAt(5)) //Não apresenta erro nessa situação, retorna apenas um valor vazio.
console.log(escola.charCodeAt(3)) //Informa o valor do caracter do indice passado na tabela unicode .
console.log(escola.indexOf('3')) //Informa o valor do indide do caracter informado.

console.log(escola.substring(1)) //Informa a partir de que indice a string deve ser mostrada.
console.log(escola.substring(0, 3)) //Informa do 1° indice que deve ser mostrado até ultimo indice informado.

console.log('escola '.concat(escola).concat("!")) /*Concatena(junta) strings literias, variaveis ou numeros 
                                                    em uma unica apresentação.*/
console.log('escola '+escola+"!") //O sinal de soma em string é usado para concatenação.
console.log(escola.replace(3, 'e')) //Substitui a string informada durante apresentação.
console.log(escola.replace(/\d/, 'e')) //Substitui todos os digitos pelo valor informado.
console.log(escola.replace(/\w/g, 'e')) //Substitui todos os caracters pelo valor informado, sem o "g", altera apenas a 1° letra.

console.log('Ana, Maria, Luan'.split(',')) //Divide a string em uma array onde tiver o caracter informado.
