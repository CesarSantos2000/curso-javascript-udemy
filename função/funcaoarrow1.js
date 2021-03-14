let dobro = function(a){
    return a*2
}

dobro = (a) => {
    return a * 2
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}
ola = () => 'olá'
ola = _ => 'olá'
console.log(ola())