var express = require('express');
var router = express.Router();
const index = require('../controllers/index.js');

/* GET home page. */
router.get('/', index.get_index);
router.post('/', index.submit_form);

module.exports = router;
