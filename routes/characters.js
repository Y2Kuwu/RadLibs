const express = require('express');
const router = express.Router();
const characterCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth');   //adding auth for paths urls

router.get('/', characterCtrl.index);

//Use is isLoggedIn middleware to protect routes
router.get('/new', characterCtrl.new);
router.get('/edit', characterCtrl.edit);
router.get('/:id', characterCtrl.show);
router.get('/:id', characterCtrl.edit);

router.post('/', isLoggedIn ,characterCtrl.create);


module.exports = router;
