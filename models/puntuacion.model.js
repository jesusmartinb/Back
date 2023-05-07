const { query } = require("express");

const score = () => {
    return db.query('SELECT id_profesor, AVG(puntuacion) as promedio_puntuacion FROM puntuacion GROUP BY id_profesor ORDER BY promedio_puntuacion DESC')
}

module.exports = {
    score
}