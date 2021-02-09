const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fe0a54de9ee69fd0bd21994376cf43c5&query=37.8267,-122.4233'
 
request({url:url, json:true }, (error, response) => {
    console.log(response.body.current.weather_descriptions + " " + response.body.current.temperature + " " + response.body.current.feelslike)
})

// gecoding