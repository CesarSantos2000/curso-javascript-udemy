function sorteio(numero) {
    const valor = Math.random() * (10 - 1) + 1
    if (numero == Math.floor(valor)) {
        console.log('Parabéns! O número sorteado foi o ', Math.floor(valor))
    } else {
        console.log('Que pena! O número sorteado foi o ', Math.floor(valor))
    }
}

sorteio(5)
sorteio(6)
sorteio(2)
sorteio(9)