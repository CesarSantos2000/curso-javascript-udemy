function eanobissexto(ano) {
    if (ano % 4 === 0) {
        if (ano % 100 === 0 && ano % 400 === 0) {
            return (ano % 100 === 0 && ano % 400 === 0)
        } else if (ano % 100 === 0 && ano % 400 != 0) {
            return 'false, pois é múltiplo de 100 e não é múltiplo de 400'
        } else {
            return true
        }
    }
}
console.log(eanobissexto(2020))
console.log(eanobissexto(2100))
console.log(eanobissexto(2016))