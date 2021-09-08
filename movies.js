'use strict';
const movieAPI = process.env.REACT_APP_MOVIES_KEY;
const axios = require('axios');

function movieData(req, res) {
    let search = req.query.searchQuery;
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${movieAPI}&query=${search}`;

    axios
        .get(url)
        .then(response => {
            let film = response.data.data.map(item => {
                return new Movie(item);
            })
            res.send(film);


        })
        .catch(res.send('sorry error'));
}

class Movie {
    constructor(item) {
        this.title = item.title;
        this.image_url = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
        this.released_on = item.release_date;
    }

}
module.exports = movieData;