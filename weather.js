'use strict';

const axios = require('axios');
const weatherAPI = process.env.REACT_APP_WEATHER_KEY;

function weatherData(req, res) {
    // console.log(1, req.query);
    // console.log(2, weatherAPI);


    let search = req.query.searchQuery;
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?city=${search}&key=${weatherAPI}`

    axios
        .get(url)
        .then(response => {
            // console.log(3, response.data.data);
            let climate = response.data.data.map(item => {
                return new Forcast(item);
            })
            // console.log(4, climate);
            res.send(climate);

        })
        .catch( error => {
            res.send('sorry error');
        });


}

class Forcast {
    constructor(item) {
        this.date = item.valid_date;
        this.description = item.weather.description;
    }
}

module.exports = weatherData;