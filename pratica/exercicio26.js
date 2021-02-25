function contaletra(letra, frase){
    let contletra = 0
    for(let i in frase){
        if (frase[i] === letra){
            contletra += 1
        }
    }
    console.log(contletra)
}

contaletra("r", "A sorte favorece os audazes")
contaletra("c", "Conhece-te a ti mesmo")
contaletra('d', 'o dado do Dado Falabela')