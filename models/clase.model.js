
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

const getTeacherByStudent = ({profesor_id, alumno_id}) => {
    return db.query('select * from clase where profesor_id=? and alumno_id=?',
    [profesor_id, alumno_id]);
}

module.exports = {
    getAlumnosbyUser,getAlumbyAlumnoId, getTeacherByStudent
}