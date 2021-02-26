function menornumero(numero) {
    let menor = numero[1]
    for (i in numero) {
        if (menor > numero[i]) {
            menor = numero[i]
        }
    }
    console.log(menor)
}
menornumero([4, 9, -1, 7, 5])
menornumero([10, 5, 35, 65])
menornumero([5, -15, 50, 3])