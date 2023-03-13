const express = require('express');
const requireAuth = require('../middleware/requireAuth')

const {createMovie} = require('../controllers/moviesController');
const router = express.Router();
router.use(requireAuth)
router.post('/add',createMovie);

// router.get('/getMovies', getMovies)

module.exports = router