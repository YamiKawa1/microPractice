const {Adaptador} = require('./Adapters')
const result = Adaptador({
    info: {name: 'Jehan', edad: 24}, 
    color:['verde', 'azul']
})

console.log(result);