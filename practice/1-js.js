const fs = require('fs');
const bufferData = fs.readFileSync('1-json.json')
const dataJSON = bufferData.toString()
const data = JSON.parse(dataJSON)

data.name = "dhruv"
data.age = 21

console.log(data)
const toJson = JSON.stringify(data) // write new data back to the jason file
fs.writeFileSync('1-json.json', toJson)