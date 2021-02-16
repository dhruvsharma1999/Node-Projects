const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZGhhc2g0NyIsImEiOiJja2t5NDNsc2owYnltMm9tb3BlZWVhd25nIn0.Ux9iIqzkUN_bLiez7q65Hw&limit=1'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to the location service', undefined)
        }else if(response.body.error){
            callback('Unable to find location, Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1], 
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name 
    
            })
        }
    })

}
module.exports = geocode