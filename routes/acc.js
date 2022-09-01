const express = require('express');
const router = express.Router();
const accCtrl = require('../controllers/acc');

router.get('/acc/new', accCtrl.new);
router.post('/acc', accCtrl.create);

// http://localhost:3000/character/6305155d63b7f5eefbf7b696/characters
router.post('/character/:id/acc', accCtrl.addChar);

module.exports = router;