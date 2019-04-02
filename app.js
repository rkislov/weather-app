const request = require('request')

const url = 'https://api.darksky.net/forecast/72d59ec58db1c3025ca639dda1b0e769/56.836,60.701'

request({
    url: url
}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})