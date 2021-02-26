function aprovação(nota){
    if(nota >= 5){
        console.log('Você foi aprovado com nota '+nota+'!')
    }
}

function seforverdadeeufalo(valor) { 
    if(valor){
        console.log('É verdade: ', valor)
    }
}

aprovação(8)
aprovação(4.7)

seforverdadeeufalo('')
seforverdadeeufalo(null)
seforverdadeeufalo(undefined)
seforverdadeeufalo(0)
seforverdadeeufalo()
seforverdadeeufalo(NaN)

seforverdadeeufalo(' ')
seforverdadeeufalo(-1)
seforverdadeeufalo(2000)
seforverdadeeufalo({})
seforverdadeeufalo([1, 2, 3])