const express = require('express');
const router = express.Router();
const characterCtrl = require('../controllers/characters');
const isLoggedIn = require('../config/auth');   //adding auth for paths urls

router.get('/', characterCtrl.index);

//Use is isLoggedIn middleware to protect routes
router.get('/new', characterCtrl.new);

// router.put('/:id/edit', characterCtrl.edit);
// router.get('/:id/edit', characterCtrl.showEdit); //show added recieving undefined characters (good)     //not recieveing id with //characters at beg
router.post('characters/:id/edit', characterCtrl.edit);  //

router.get('/:id', characterCtrl.show);
router.get('characters/:id/edit', characterCtrl.showEl);

//router.get('/:id', characterCtrl.die)
router.delete('/:id/delete', characterCtrl.die); 
router.post('/', isLoggedIn ,characterCtrl.create);


module.exports = router;
