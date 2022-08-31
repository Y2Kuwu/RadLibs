const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');
const isLoggedIn = require('../config/auth');   //adding auth for paths urls

router.get('/', moviesCtrl.index);

//Use is isLoggedIn middleware to protect routes
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', isLoggedIn ,moviesCtrl.create);


module.exports = router;
