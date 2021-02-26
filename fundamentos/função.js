//Função sem retorno

function impriminota(a, b){
    console.log(a+b)
}
impriminota(8, 5)
impriminota(2)
impriminota(2, 5, 7, 9, 10)
impriminota()

//Função com retorno

function soma(a, b=1){
    return a+b
}
console.log(soma(2, 9))
console.log(soma(2))
console.log(soma())