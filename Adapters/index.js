const { Servicio } = require('../Services')
function Adaptador({color, info}) {
    const result = Servicio({color, info})
    
    return result;
}

module.exports = { Adaptador }