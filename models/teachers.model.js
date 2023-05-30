const { query } = require("express");

const getMap = () => {
    return db.query('SELECT * FROM datos_personales INNER JOIN usuario ON datos_personales.usuario_id = usuario.id WHERE usuario.role= "profesor"');
}

const getMateriabyTeacher = (teacherId) => {
    return db.query('select * from nivel as a INNER JOIN (SELECT a.usuario_id, a.materia_id, a.nivel_id, b.descripcion as rama FROM rama_conocimiento as a INNER JOIN rama as b ON b.id= a.materia_id where a.usuario_id=?) as b ON b.nivel_id = a.id',[teacherId]);
}

const getAllInactive = () => {
    return  db.query('select * from datos_personales as d INNER JOIN (SELECT a.experiencia,a.cuota, a.usuario_id as usr_id, a.status, b.username, b.email  FROM profesor as a INNER JOIN usuario as b ON a.usuario_id=b.id where a.status=0) as c ON d.usuario_id = c.usr_id');
}

const getAllActive = () => {
    return  db.query('select *  from profesor  INNER JOIN datos_personales ON  datos_personales.usuario_id = profesor.usuario_id where profesor.status=1');
}

const getAll = () => {
    return  db.query('select *  from profesor  INNER JOIN datos_personales ON  datos_personales.usuario_id = profesor.usuario_id');
}


const getByTeacherId = (teacherId) => {
    return db.query(
        'select * from datos_personales INNER JOIN profesor  ON datos_personales.usuario_id = profesor.usuario_id WHERE profesor.usuario_id= ?',[teacherId]);
    }

const getById = (teacherId) => {
        return db.query(
            'select * from datos_personales INNER JOIN profesor  ON datos_personales.usuario_id = profesor.usuario_id WHERE profesor.id= ?',[teacherId]);
        }

const getUserbyId = (usuario_id) => {
    return db.query(
        'select * from usuario  WHERE id= ?',[usuario_id]);
    
}
    

const getByUserId = (userId) => {
    return db.query('select * from profesor where usuario_id=?',[userId]);
}


const createProfesor = ({cuota, experiencia, usuario_id}) => {
    return db.query(
        'insert into profesor ( cuota, experiencia, usuario_id) values (?,?,?)',
        [cuota, experiencia, usuario_id]
    )

}

const setActive = (teacherId) => {
    return db.query(
        'update profesor set status="1" where usuario_id = ?',
        [teacherId]
    )
}

const setInactive = (teacherId) => {
    return db.query(
        'update profesor set status="0" where usuario_id = ?',
        [teacherId]
    )
}

const update = (teacherId,{nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono, cuota, experiencia})  => {
    return db.query(
        'update profesor set nombre=?, apellidos = ?, fecha_nacimiento = ?, foto = ?, direccion = ?, ciudad = ?, codigo_postal = ?, longitud = ?, latitud = ?,telefono = ?, cuota = ?, experiencia = ?  where id = ?',
        [nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono, cuota, experiencia, teacherId]
    )
}

const deleteById = (teacherId)  => { 
    return db.query('delete  from profesor where  id =?',[teacherId]);
}


module.exports = {
    getAllInactive, update, deleteById, getMap,getById,
    setActive, getByUserId, createProfesor, getByTeacherId, getAllActive, getAll, getUserbyId,
    setInactive, getMateriabyTeacher
}