const router = require('express').Router();

router.use('/teachers', require('./api/teachers'));
router.use('/mail', require('./api/mail'));
router.use('/users', require('./api/users'));
router.use('/puntuacion', require('./api/puntuacion'));
router.use('/clase', require('./api/clase'));
router.use('/chat', require('./api/chat'));
router.use('/alumno', require('./api/alumno'));
router.use('/personal', require('./api/personal'));

module.exports = router;