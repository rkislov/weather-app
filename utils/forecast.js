const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/72d59ec58db1c3025ca639dda1b0e769/" + latitude + "," + longitude + "?units=si&lang=ru";
    request({
            url: url,
            json: true
        },
        (error, response) => {
            if (error) {
                callback('Unable to connect to weather service', undefined);
            } else if (response.body.error) {
                callback('unable to find location', undefined);
            } else {
                callback(undefined,
                    response.body.daily.data[0].summary +
                    " It is curenntly " +
                    response.body.currently.temperature +
                    " deegres out.  There is a " +
                    response.body.currently.precipProbability +
                    "% chance of rain"
                );
            }
        }
    );
}

module.exports = forecast