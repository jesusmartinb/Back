const getByAdminId = (adminId) => {
    return db.query(
        'select * from administrador INNER JOIN usuario  ON administrador.usuario_id = usuario.id WHERE administrador.usuario_id= ?',[adminId]);
    }

module.exports = {
    getByAdminId
}

