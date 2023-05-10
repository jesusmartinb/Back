const jwt = require('jsonwebtoken');
const { getByID } = require('../models/user.model');

const checkToken = async (req,res, next) => {
    if (!req.headers['authorization']) {
        return res.json({fatal :'Debes incluir cabecera'});
    }

    const token = req.headers['authorization'];

    let obj;
    try {
    obj = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.json({fatal: error.message});
    }
    const [users] = await getByID(obj.user_id);
    req.user = users[0];

    next();

}

/*const checkAdmin =  (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({ fatal: 'Debes ser usuario admin'});
    }
    next();

} */

const checkRole = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.json({ fatal: `Debes ser usuario ${role}`});
      }
      next();
    };
  };

module.exports = {
    checkToken, checkRole
}
