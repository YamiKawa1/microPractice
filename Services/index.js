const {PersonalData, PreferenceColor} = require('../Controllers')

function Servicio ({info, color}) {

    const personalData = PersonalData({info});

    const preferenceColor = PreferenceColor({color});


    return {personalData, preferenceColor}
}

module.exports = {Servicio}