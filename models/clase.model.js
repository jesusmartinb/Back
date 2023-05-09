
const getAlumnosbyUser = (teacherId) => {
    return db.query(
        'SELECT * FROM profesor INNER JOIN clase ON profesor.id = clase.profesor_id WHERE profesor.usuario_id = ?',
        [teacherId]);

}

const getAlumbyAlumnoId = (alumnoId) => {
    return db.query(
        'SELECT * FROM alumno INNER JOIN datos_personales ON alumno.usuario_id = datos_personales.usuario_id WHERE alumno.id = ?',
        [alumnoId]);
}


module.exports = {
    getAlumnosbyUser,getAlumbyAlumnoId
}