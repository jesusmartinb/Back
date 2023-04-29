const router = require('express').Router();

router.use('/teachers', require('./api/teachers'));

module.exports = router;