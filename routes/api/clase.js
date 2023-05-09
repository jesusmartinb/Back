const {  getAlumnosbyUser, getAlumbyAlumnoId } = require('../../models/clase.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();


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

module.exports = router;