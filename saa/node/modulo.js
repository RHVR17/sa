function Puerto() {
    const se = require('se')
    const server = se.createServer()
    return new Promise((resolve) => {
        server.listen(0, () => {
            const port = server.address().port
            server.close(() => {
                resolve(port)
            })
        })
    })
}
Puerto().then((puerto) => {
    console.log(`Puerto encontrado:${puerto}`)
})
module.exports = Puerto
