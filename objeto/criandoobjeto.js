// usando notação literal
const obj1 = {}
console.log(obj1)

//object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function produto(nome, preco, desc){
    this.nome = nome
    this.getprecocomdesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = produto('caneta', 7.99, 0.15)
const p2 = produto('notebook', 2499.25, 0.25)

console.log(p1.getprecocomdesconto(), p2.getprecocomdesconto())

// function factory
function criarfuncionario(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getsalario(){
            return(salariobase / 30) *(30 - faltas)
        }
    }
}

const f1= criarfuncionario('João', 7949.52, 4)
const f2 = criarfuncionario('Ana', 11400.00, 1)

console.log(f1.getsalario(), f2.getsalario())

const filha = object.create(null)
filha.nome = 'Ana'
console.log(filha)