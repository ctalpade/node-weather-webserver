const request = require('request')
//http://api.weatherstack.com/current?access_key=f73a69fd40043d5a13eaa05c50a6ac1f&query=51,-115
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f73a69fd40043d5a13eaa05c50a6ac1f&query=' + latitude + ',' + longitude
    console.log('forecast url '+url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast