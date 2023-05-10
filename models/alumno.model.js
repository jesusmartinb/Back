
const createAlumno = ({estudia, usuario_id}) => {
    return db.query(
        'insert into alumno ( estudia, usuario_id) values (?,?)',
        [estudia, usuario_id]
    )

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



module.exports = {
    createAlumno, getAll, setInactive, getByStudentId
    
}