const { getAlumnos } = require('../../models/clase.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();


router.get('/:teacherId',checkToken,checkRole('profesor'), async (req, res) => {
    const {teacherId} = req.params;
    try {
       const [result] = await getAlumnos(teacherId);
       if (result.length===0) {
            return res.json({ fatal: 'No existe un profesor con ese ID'});
       }
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
})

module.exports = router;

module.exports = router;