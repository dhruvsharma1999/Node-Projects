const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fe0a54de9ee69fd0bd21994376cf43c5&query='+ lat + ','+ long + '&units=f';
    request({url: url, json: true}, (error, response) =>{

        if (error) {
        callback('Unable to connect to the weather service', undefined)
        }else if (response.body.error) {
        callback('Unable to find location', undefined)
        }else{
            callback(undefined, response.body.current.weather_descriptions + " " + response.body.current.temperature + " " + response.body.current.feelslike)
        }
    })
}

module.exports = forecast

// {
//     description: response.body.current.weather_descriptions,
//     current_temprature: response.body.current.temperature,
//     feels_like: response.body.current.feelslike
// }