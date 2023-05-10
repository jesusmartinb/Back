const {  getAlumnosbyUser, getAlumbyAlumnoId, getTeacherByStudent } = require('../../models/clase.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/exist',checkToken,checkRole('alumno'), async (req, res) => {
    const [exist] = await getTeacherByStudent(req.body);
    if (exist.length===0) {
        return res.json({ fatal: 'El profesor no le ha dado clases al alumno'});
    }
    res.json({success: true})


});

router.get('/:userId',checkToken,checkRole('profesor'), async (req, res) => {
    const {userId} = req.params;
    try {
       const [results] = await getAlumnosbyUser(userId);
       if (results.length===0) {
            return res.json({ fatal: 'No existe un profesor con ese ID'});
       }

       for(let result of results) {
        const [alumno] = await getAlumbyAlumnoId(result.alumno_id);
        const {nombre, apellidos, foto} = alumno[0];
        result.alumno = {nombre, apellidos, foto};
    }

        res.json(results);
    } catch (error) {
        res.json({fatal: error.message});
    }
})



module.exports = router;