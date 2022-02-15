const {PersonalData, PersonalColor} = require('../Controllers')
function Servicio({color, info}) {

    const personalData = PersonalData({info});
    const personalColor = PersonalColor({color});

    // console.log(personal, color);

    return {personalData, personalColor}

}

module.exports = { Servicio }