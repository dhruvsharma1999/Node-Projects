const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fe0a54de9ee69fd0bd21994376cf43c5&query=37.8267,-122.4233'
 
request({url:url, json:true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to the weather service')
    }else if (response.body.error) {
        console.log('Unable to find location')
    }else {
        console.log(response.body.current.weather_descriptions + " " + response.body.current.temperature + " " + response.body.current.feelslike)

    }

})

// gecoding
// To convert a given location name to lat and lang, to determine to temprature 

const url_2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGhhc2g0NyIsImEiOiJja2t5NDNsc2owYnltMm9tb3BlZWVhd25nIn0.Ux9iIqzkUN_bLiez7q65Hw&limit=1"

request({url:url_2, json: true},(error, response) =>{
    if (error) {
        console.log('Unable to connect to the weather service')
    }else if (response.body.error) {
        console.log('Unable to find location')
    }else {
        console.log('lattitude is ' + response.body.features[0].center[1] + 'logitude is ' + response.body.features[0].center[0])

    }
})