function inverter(valor) {
    const tipo = typeof valor
    if (tipo == 'boolean')
        console.log(!valor)
    else if (tipo == 'number')
        console.log(-valor)
    else
        console.log(`booleano ou números esperado, mas o parâmetro é do tipo ${tipo}`)
}
inverter(true)
inverter(6)
inverter('')