const fs = require('node:fs')

const fsp = require('node:fs/promises')

console.log('archivo1:')
fs.readFile('archivo1.txt', 'utf-8',(error, contenido) => {
    console.log(contenido)
})
