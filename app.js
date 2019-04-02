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
    if (error) {
      console.log("Unable to connect to weather service");
    } else if (response.body.error) {
      console.log("unable to find location");
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

const geoUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Yekaterinburg.json?access_token=pk.eyJ1Ijoicmtpc2xvdiIsImEiOiJjanR6bW1laHYwMTZhNGVwOHFjazR0NmdxIn0.6C7eMkkVUptRSmccMaJ_CQ";

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to mapbox service");
  } else if (response.body.features.length === 0) {
    console.log("no matching result for your query");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }
});
