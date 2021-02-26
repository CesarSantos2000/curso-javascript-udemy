function aprovação(nota){
    if(nota >= 5) //Estruras if sem blocos só executam a primeira linha do codigo
        console.log(nota)
        console.log('Final!')
}
aprovação(4)
aprovação(8)

function teste2(num) {
    if(num >= 6); { //Não se deve usar ";" em estruturas de controle
        console.log(num)
    }
}

console.log(6)
console.log(8)