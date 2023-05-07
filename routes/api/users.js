const { create, getByEmail } = require('../../models/user.model');

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { createToken } = require('../../utils/helpers');
const {checkToken} = require('../../utils/middlewares');

router.get('/profile', checkToken, (req, res) => {
    delete req.user.password;
    res.json(req.user);
});

router.post('/register', async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8);
    try {
        const [result] = await create(req.body);
        res.json({insertId : result.insertId});

    } catch (error) {
        res.json({fatal: error.message});
    }


});

router.post('/login', async (req, res) => {
    const [users] = await getByEmail(req.body.email);
 //   res.json(users.length);
    if (users.length === 0) {
        return res.json({ fatal: 'Error en email y/o contraseña'});
    }

    const user = users[0];
    const iguales = bcrypt.compareSync(req.body.password,user.password);
    if (!iguales) {
        return res.json({ fatal: 'Error en email y/o contraseña'});
    }
    res.json({success:  'Login correcto',
        token: createToken(user) });
});


module.exports = router;