const router = require('express').Router();

router.use('/teachers', require('./api/teachers'));
router.use('/mail', require('./api/mail'));
router.use('/users', require('./api/users'));
router.use('/puntuacion', require('./api/puntuacion'));
router.use('/clase', require('./api/clase'));

module.exports = router;