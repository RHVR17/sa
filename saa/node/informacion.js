
const os = require('node:os')

function informacion() {
    return {
        cpu: os.ncpu().length,so: os.platform(),ramt: os.totalmem(),raml: os.freemem(),
    }
}
module.exports =informacion
