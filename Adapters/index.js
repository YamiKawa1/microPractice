const {Servicio} = require('../Services')

function Adaptador ({info, color}) {
    const result = Servicio({info, color})
    console.log("hola");
    return result
}

module.exports = {Adaptador}