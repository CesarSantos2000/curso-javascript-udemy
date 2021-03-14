// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'global'

function fora(){
    const c= 'local'
    function dentro(){
        return x
    }
}
const minhafuncao = fora()
console.log(minhafuncao())