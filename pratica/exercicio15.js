function pareseindicespares(valor){
    const pares = []
    for(let i in valor){
        if(i % 2 == 0){
            if(valor[i]%2 == 0){
                pares.push(valor[i])
            }
        }
    }
    console.log(pares)
}
pareseindicespares([1, 2, 3, 4])
pareseindicespares([10, 70, 22, 43])