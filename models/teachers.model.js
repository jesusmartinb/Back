const { query } = require("express");

const getAll = () => {
    return  db.query('select *  from teacher');
}

const getById  = (teacherId) => {
    return db.query('select * from teacher where  id =?',[teacherId]);

}

const create = ({first_name, last_name, username, email}) => {
    return db.query(
        'insert into teacher (first_name, last_name, username, email) values (?,?,?,?)',
        [first_name,last_name,username, email]
    )

}

const update = (teacherId,{first_name, last_name, username, email})  => {
    return db.query(
        'update teacher set first_name=?, last_name = ?, username = ?, email = ? where id = ?',
        [first_name,last_name,username, email, teacherId]
    )
}

const deleteById = (teacherId)  => { 
    return db.query('delete  from teacher where  id =?',[teacherId]);
}


module.exports = {
    getAll, getById,create,update, deleteById
}