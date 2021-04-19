const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = f => f.pais === 'China' 
const genero = f => f.genero === 'F' 
const menorsalario = (func, funcatual) => {
    return func.salario < funcatual.salario ? func : funcatual
}
const funcionarios = axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)
    //mulher chinesa com menor salario
    const func = funcionarios
        .filter(pais)
        .filter(genero)
        .reduce(menorsalario)

    console.log(func)
})


