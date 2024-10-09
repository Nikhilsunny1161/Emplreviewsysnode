const express = require('express');
const router = express.Router();

console.log('router reloaded');
// routes for users
router.use('/', require('./users'));


// routes for reviews

router.use('/review', require('./reviews'));

module.exports = router;