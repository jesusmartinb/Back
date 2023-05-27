
const getAlumnosbyUser = (teacherId) => {
    return db.query(
        'SELECT * FROM profesor INNER JOIN clase ON profesor.id = clase.profesor_id WHERE profesor.usuario_id = ?',
        [teacherId]);

}

const getAlumbyAlumnoId = (alumnoId) => {
    return db.query(

        'select * from (SELECT   a.status, a.estudia, d.nombre, d.apellidos,  d.fecha_nacimiento, d.foto, d.direccion, d.ciudad, d.codigo_postal, d.telefono,d.usuario_id FROM alumno as a INNER JOIN datos_personales as d ON a.usuario_id = d.usuario_id WHERE a.id = ?) as tabla INNER JOIN usuario ON usuario.id = tabla.usuario_id',
        [alumnoId]);
}

const getTeacherByStudent = ({profesor_id, alumno_id}) => {
    return db.query('select * from clase where profesor_id=? and alumno_id=?',
    [profesor_id, alumno_id]);
}

const CreateNivel = ({usuario_id, nivel}) =>{
    return db.query('insert into nivel (usuario_id, nivel) values (?,?)',
    [usuario_id, nivel]);
}

const createRama = ({usuario_id, materia}) =>{
    return db.query('insert into rama_conocimiento (usuario_id, materia) values (?,?)',
    [usuario_id, materia]);
}

const getNivel = () => {
    return db.query('select * from nivel');
}

const getRama = () => {
    return db.query('select * from rama_conocimiento');
}


module.exports = {
    getAlumnosbyUser,getAlumbyAlumnoId, getTeacherByStudent,
    getNivel, CreateNivel, createRama, getRama
}