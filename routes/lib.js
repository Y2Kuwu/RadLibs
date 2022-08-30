
const express = require('express');
const router = express.Router();
const libCtrl = require('../controllers/libs')

router.get('/', libCtrl.index);
router.get('/new', libCtrl.new);
router.get('/:id', libCtrl.show);
router.post('/', libCtrl.create);

module.exports = router;