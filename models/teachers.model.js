const { query } = require("express");

const getMap = () => {
    return db.query('SELECT * FROM datos_personales INNER JOIN usuario ON datos_personales.usuario_id = usuario.id WHERE usuario.role= "profesor"');
}

const getAllInactive = () => {
    return  db.query('select *  from profesor  INNER JOIN datos_personales ON  datos_personales.usuario_id = profesor.usuario_id where profesor.status=0');
}

const getAllActive = () => {
    return  db.query('select *  from profesor  INNER JOIN datos_personales ON  datos_personales.usuario_id = profesor.usuario_id where profesor.status=1');
}



const getByTeacherId = (teacherId) => {
    return db.query(
        'select * from datos_personales INNER JOIN profesor  ON datos_personales.usuario_id = profesor.usuario_id WHERE profesor.usuario_id= ?',[teacherId]);
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
    getAllInactive, update, deleteById, getMap,
    setActive, getByUserId, createProfesor, getByTeacherId, getAllActive
}