
const getAlumnos = (teacherId) => {
    return db.query(
        'SELECT * FROM alumno INNER JOIN clase ON alumno.id = clase.alumno_id WHERE clase.profesor_id = ?',
        [teacherId]
    );

}


module.exports = {
    getAlumnos
}