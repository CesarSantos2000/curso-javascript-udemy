function somatudo(valor) {
    let resultado = 0
    for (let i in valor) {
        resultado += valor[i]
    }
    console.log(resultado)
}
somatudo([10, 10, 10])
somatudo([15, 15, 15, 15])