const { geocoder } = require('../../config/geocoder');
const { createAlumno, getAll, setInactive, getByStudentId, getByUserId, getUserByAlumnoId } = require('../../models/alumno.model');
const { createDatos, getById } = require('../../models/teachers.model');
const { getByID } = require('../../models/user.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/:userId',checkToken,checkRole('alumno'), async (req,res) => {
    const {userId} = req.params;
    try {
       const [result] = await getByStudentId(userId);
       const [alumno] = await getUserByAlumnoId(userId);
       if (result.length===0) {
            return res.json({ fatal: 'No existe un alumno con ese ID'});
       }
       result[0].username = alumno[0].username;
       result[0].email = alumno[0].email;
        res.json(result[0]);
    } catch (error) {
        res.json({fatal: error.message});
    }
})


router.get('/', checkToken,checkRole('admin'),async (req, res) => {
    try {
        const [items] = await getAll();
        const perPage = 5; // número de elementos por página
        let page = req.query.page || 1; // página solicitada (por defecto es la primera)
        page = parseInt(page); 
        const startIndex = (page - 1) * perPage; // índice de inicio de la página
        const endIndex = startIndex + perPage; // índice final de la página
        const results = items.slice(startIndex, endIndex); // elementos de la página solicitada
        res.json({
            page,
            perPage,
            totalItems: items.length,
            totalPages: Math.ceil(items.length / perPage),
            results
        });
    } catch (error) {
        res.json({fatal: error.message});
    }
    
})

router.post('/', checkToken,checkRole('alumno'), async (req, res) => {
    try {
  
        await createAlumno(req.body)
        const [alumno] = await getByUserId(req.body.usuario_id);
        res.json(alumno[0]);

    } catch (error) {
        res.json({fatal: error.message});
    }
}
)

router.put('/inactive/:userId',checkToken,checkRole('admin'), async (req, res) => {
    try {
        const {userId} = req.params;
        await setInactive(userId);
        const [student] = await getByStudentId(userId)
        res.json(student[0]);
        } catch (error) {
        res.json({fatal: error.message});
        }
})

module.exports = router;