const { score, create } = require('../../models/puntuacion.model');
const { getById } = require('../../models/teachers.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [results] = await score();

        for(let result of results) {
            const [teacher] = await getById(result.id_profesor);
            const {nombre, apellidos, foto} = teacher[0];
            result.teacher = {nombre, apellidos, foto};
        }

         res.json(results);
     } catch (error) {
         res.json({fatal: error.message});
     }
})

router.post('/', checkToken,checkRole('alumno'),async (req, res) => {
    try {
        const [results] = await create(req.body);
        res.json(results);
     } catch (error) {
         res.json({fatal: error.message});
     }
})


module.exports = router;


