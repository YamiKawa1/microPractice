const { Adaptador } = require('./Adapters')


const result = Adaptador({ 
    color: ['verde', 'azul'], 
    info:{name: 'nelson', edad: 28}
})

console.log(result);