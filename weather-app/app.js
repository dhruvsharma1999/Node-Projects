const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


forecast(28.41667,77.3, (error, data) => {
    console.log(error)
    console.log(data)
})


geocode('Faridabad', (error, data) => {
    console.log(error)
    console.log(data)
})