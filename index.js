const { Adaptador } = require('./Adapters')


const result = Adaptador({ 
    color: 'rojo', 
    info:{name: 'nelson', edad: 10, domicilio: 'direccion x', nacionalidad: "venezolano", editor: "block de notas"}
})

console.log(result);