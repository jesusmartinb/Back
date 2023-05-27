const {  getAlumnosbyUser, getAlumbyAlumnoId, getTeacherByStudent, CreateNivel, getNivel, getRama, createRama } = require('../../models/clase.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/exist',checkToken,checkRole('alumno'), async (req, res) => {
    const [exist] = await getTeacherByStudent(req.body);
    if (exist.length===0) {
        return res.json({ fatal: 'El profesor no le ha dado clases al alumno'});
    }
    res.json({success: true})


});

router.get('/nivel',checkToken, async (req, res) => {
    try {
        const [result] = await getNivel();
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
});

router.get('/rama',checkToken, async (req, res) => {
    try {
        const [result] = await getRama();
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
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
        delete alumno[0].password;
        
        result.alumno = alumno[0];
    }

        res.json(results);
    } catch (error) {
        res.json({fatal: error.message});
    }
})



router.post('/nivel', checkToken, async( req,res) => {
    try {
    const [result] = await CreateNivel(req.body); 
    res.json(result)
    } catch (error) {
        res.json({fatal: error.message});
    }

})

router.post('/rama', checkToken, async( req,res) => {
    try {
    const [result] = await createRama(req.body); 
    res.json(result)
    } catch (error) {
        res.json({fatal: error.message});
    }

})



module.exports = router;