const ModuloA = require('../../ModuloA')
console.log(ModuloA.ola)

const c = require('./pasta c')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res)=> {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
