const express = require('express');


const {createMovie} = require('../controllers/moviesController');
const router = express.Router();

router.post('/addFav',createMovie);

// router.get('/getMovies', getMovies)

module.exports = router