const { query } = require("express");

const getMap = () => {
    return db.query('select nombre, apellidos, longitud, latitud from profesor')
}

const getAll = () => {
    return  db.query('select *  from profesor');
}

const getById  = (teacherId) => {
    return db.query('select * from profesor where  id =?',[teacherId]);

}

const create = ({nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono, cuota, experiencia, usuario_id}) => {
    return db.query(
        'insert into profesor (nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono, cuota, experiencia, usuario_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono, cuota, experiencia, usuario_id]
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
    getAll, getById,create,update, deleteById, getMap
}