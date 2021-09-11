'use strict';
const movieAPI = process.env.REACT_APP_MOVIES_KEY;
const axios = require('axios');
const { query } = require('express');

let cashMemory = {};


function movieData(req, res) {
    let search = req.query.searchQuery;

    // check: do I have the data ! otherwise I will hit the API
    if (cashMemory[query] !== undefined) {
        res.send(cashMemory[query]);
    } else {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${movieAPI}&query=${search}`;

        axios
            .get(url)
            .then(response => {
                // console.log(response.data.results);

                let film = response.data.results.map(item => {
                    // console.log(item);
                    return new Movie(item);
                })
                cashMemory[query] = film;
                res.send(film);


            })
            .catch(error => {
                res.send('sorry error ' + error);
            });
    }
}

class Movie {
    constructor(item) {
        this.title = item.title;
        this.overview = item.overview;
        this.total_votes = item.total_votes;
        this.popularity = item.popularity;
        this.image_url = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
        this.released_on = item.release_date;
    }

}
module.exports = movieData;