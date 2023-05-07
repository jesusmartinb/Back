const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        user_role: user.rol,
        exp: dayjs().add(5,'minutes').unix()
    }

    return jwt.sign(obj, process.env.SECRET_KEY);

}

module.exports = {
    createToken
}