const create = ({nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono, usuario_id}) => {
    return db.query(
        'insert into datos_personales (nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono,  usuario_id) values (?,?,?,?,?,?,?,?,?,?,?)',
        [nombre, apellidos, fecha_nacimiento, foto, direccion, ciudad, codigo_postal, longitud, latitud,telefono,  usuario_id]
    )

}

const getById  = (insertId) => {
    return db.query('select * from datos_personales where  id =?',[insertId]);

}

module.exports = {
    create, getById
}