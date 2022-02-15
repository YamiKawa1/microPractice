const {PersonalData, PersonalColor} = require('../Controllers')
function Servicio({color, info}) {

    var personalData = PersonalData({info});
    var personalColor = PersonalColor({color});

    if (personalData.info.edad > 18) {
        personalColor = 'azul'
    }

    switch (personalData.info.editor) {
        case "vs":
            console.log("You really love visual studio");
            break;

        case "atom":
            console.log("You really love visual studio");
            break;

        case "block de notas":
            console.log("you really love do things the hard way");
            break;
    }

    // console.log(personal, color);

    return {personalData, personalColor}

}

module.exports = { Servicio }