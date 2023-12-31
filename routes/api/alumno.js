const { geocoder } = require('../../config/geocoder');
const { createAlumno, getAll, setInactive, getByStudentId, getByUserId, getUserByAlumnoId, getAlumnoByUserId, getTeachersbyAlum, getDatosbyUserId, setActive } = require('../../models/alumno.model');
const { createDatos, getById } = require('../../models/teachers.model');
const { getByID } = require('../../models/user.model');
const { createPages } = require('../../utils/helpers');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/', checkToken,checkRole('admin'),async (req, res) => {
    try {
        const [items] = await getAll();
        res.json(createPages(items,req,20));
    } catch (error) {
        res.json({fatal: error.message});
    }
    
})

router.get('/teachers/:userId',checkToken,checkRole('alumno'), async (req,res) => {
    const {userId} = req.params;
    try {
        [alumnoId] = await getAlumnoByUserId(userId);
        [teacher] =  await getTeachersbyAlum(alumnoId[0].id)


        const list = await Promise.all(teacher.map(async (profesor) => {
        const [datos] = await getDatosbyUserId(profesor.usuario_id);
        delete datos[0].password;
        profesor.datos_per = datos[0];
        return profesor;
      }));


        
        res.json(list);

    }  catch (error) {
        res.json({fatal: error.message});
    }

})

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

router.put('/active/:userId',checkToken,checkRole('admin'), async (req, res) => {
    try {
        const {userId} = req.params;
        await setActive(userId);
        const [student] = await getByStudentId(userId)
        console.log("paso por aca");
        res.json(student[0]);
        } catch (error) {
        res.json({fatal: error.message});
        }
})

module.exports = router;