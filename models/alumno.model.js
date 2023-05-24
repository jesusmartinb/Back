
const createAlumno = ({estudia, usuario_id}) => {
    return db.query(
        'insert into alumno ( estudia, usuario_id) values (?,?)',
        [estudia, usuario_id]
    )

}

const getByUserId = (userId) => {
    return db.query('select * from alumno where usuario_id=?',[userId]);
}


const getAll = () => {
    return  db.query('select *  from alumno  INNER JOIN datos_personales ON  datos_personales.usuario_id = alumno.usuario_id');
}

const setInactive = (stundentId) => {
    return db.query(
        'update alumno set status="0" where usuario_id = ?',
        [stundentId]
    )
}

const getByStudentId = (studentId) => {
    return db.query(
        'select * from datos_personales INNER JOIN alumno  ON datos_personales.usuario_id = alumno.usuario_id WHERE alumno.usuario_id= ?',[studentId]);
    }

const getUserByAlumnoId = (usuario_id) => {
        return db.query(
            'select * from usuario  where id= ?',[usuario_id]);
        }

const getAlumnoByUserId = (usuario_id) => {
    return db.query(
        'select * from alumno  where usuario_id= ?',[usuario_id]);
    }

const getTeachersbyAlum = (alumnoId) => {
    return db.query(
        'select * from clase INNER JOIN profesor ON clase.profesor_id = profesor.id  where clase.alumno_id= ?',[alumnoId]);
    }

const getDatosbyUserId = (usuario_id) => {
    return db.query(
        'select * from datos_personales INNER JOIN usuario ON datos_personales.usuario_id = usuario.id where datos_personales.usuario_id= ?',[usuario_id]);
    }



module.exports = {
    createAlumno, getAll, setInactive, getByStudentId, getByUserId, getUserByAlumnoId,
    getAlumnoByUserId,getTeachersbyAlum, getDatosbyUserId
    
}