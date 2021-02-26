//função em JS é First-class objects (citizens)
//higher-order function

//criar de forma literal
function fun1({ })

//armazenar em uma vaiavel
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return (a + b); fun1, fun2 }]
console.log(array[0](5, 4))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

//passar função como parâmetro
function run(fun) {
    fun()
}
run(function () { console.log('executando...') })

//uma função poder retornar/ter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}