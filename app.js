const request = require("request");

const url =
  "https://api.darksky.net/forecast/72d59ec58db1c3025ca639dda1b0e769/56.836,60.701?units=si&lang=ru";

request(
  {
    url: url,
    json: true
  },
  (error, response) => {
    // console.log(response.body.currently)
    if (error){
        console.log('Unable to connect to weather service')
    } else {
           console.log(
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

//Geocoding

// const geoUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicmtpc2xvdiIsImEiOiJjanR6bW1laHYwMTZhNGVwOHFjazR0NmdxIn0.6C7eMkkVUptRSmccMaJ_CQ";

// request({ url: geoUrl, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[0];
//   const longitude = response.body.features[0].center[1];
//   console.log(latitude);
//   console.log(longitude);
// });
