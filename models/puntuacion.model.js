const { query } = require("express");

const score = () => {
    return db.query('SELECT id_profesor, AVG(puntuacion) as promedio_puntuacion FROM puntuacion GROUP BY id_profesor ORDER BY promedio_puntuacion DESC')
}

const create = ({profesor_id,alumno_id,puntuacion,opinion}) => {
    return db.query('insert into puntuacion (id_profesor,id_alumno,puntuacion,opinion) values (?,?,?,?)',
    [profesor_id,alumno_id,puntuacion,opinion])
}

module.exports = {
    score, create
}