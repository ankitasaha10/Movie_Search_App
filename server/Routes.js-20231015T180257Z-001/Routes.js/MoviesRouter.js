const express = require('express');
const { search, favorite } = require('../Controller/MovieController');
const MovieRouter = express.Router();

MovieRouter.route('/favorite').get(favorite); 
MovieRouter.route('/search').get(search);


module.exports = MovieRouter

