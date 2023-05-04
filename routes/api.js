const router = require('express').Router();

router.use('/teachers', require('./api/teachers'));
router.use('/mail', require('./api/mail'));

module.exports = router;