const createMsg = ({remitente, destinatario, contenido}) => {
    return db.query('insert into mensaje (remitente, destinatario, mensaje) values (?,?,?)',
    [remitente, destinatario, contenido]);
}

const getMsg = ({remitente, destinatario}) => {
    return db.query('SELECT * FROM mensaje WHERE (remitente = ? AND destinatario = ?) OR (remitente = ? AND destinatario = ?) ORDER BY fecha_act DESC',
    [remitente, destinatario,destinatario,remitente])
}


module.exports = {
    createMsg,getMsg
    
}