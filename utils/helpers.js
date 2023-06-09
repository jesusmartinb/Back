const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        user_role: user.rol,
        exp: dayjs().add(240,'minutes').unix()
    }

    return jwt.sign(obj, process.env.SECRET_KEY);

}

const createPages = (items, req, perPage) => {
    let page = req.query.page || 1;
   // let page = req.query.page || 1; // página solicitada (por defecto es la primera)
    page = parseInt(page); 
    const startIndex = (page - 1) * perPage; // índice de inicio de la página
    const endIndex = startIndex + perPage; // índice final de la página
    const results = items.slice(startIndex, endIndex); // elementos de la página solicitada
    return {
        page,
        perPage,
        totalItems: items.length,
        totalPages: Math.ceil(items.length / perPage),
        results
    };
}

module.exports = {
    createToken, createPages
}