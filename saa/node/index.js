const http = require('node:http')
const modulo = require('./modulo')
const informacion = require('./informacion')
const archivo = require('./archivo')

const server = http.createServer(async (req, res) => {
    const modulo = await modulo()
    const informacion = informacion()
    const archivo = await archivo('archivo1.txt')

    const re = {
        modulo,informacion,archivo
    }
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(re))
})
server.listen(3000, () =>{
    console.log('escuchando puerto 3000')
})
