const {  getById, getMap, getAllInactive, setActive, createProfesor, getByTeacherId, getAllActive, getByUserId, getAll, getUserbyId, setInactive } = require('../../models/teachers.model');
const {checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();
const math = require('mathjs');
const { geocoder } = require('../../config/geocoder');
const { getUserByAlumnoId } = require('../../models/alumno.model');
const { createPages } = require('../../utils/helpers');




router.get('/', checkToken,checkRole('admin'),async (req, res) => {
    try {
        const [items] = await getAllInactive();

        res.json(createPages(items,req));
    } catch (error) {
        res.json({fatal: error.message});
    }
    
})

router.get('/all', checkToken,checkRole('admin'),async (req, res) => {
    try {
        [result] = await getAll();
        const errors = [];
        const list = await Promise.all(result.map(async (profesor) => {
            const [datos] = await getUserbyId(profesor.usuario_id);
            
            if (datos[0] === undefined) {
                errors.push({ fatal: 'No existe el usuario:' + profesor.usuario_id });
            } else {
                delete datos[0].password;

            }            
            profesor.datos_per = datos[0];
            return profesor;
        }));
        if (errors.length > 0) {
            res.json({ errors });
          } else {
           res.json(createPages(result,req));
          }
       

    } catch (error) {
        res.json({fatal: error.message});
    }

});

router.get('/active', checkToken,checkRole('alumno'),async (req, res) => {
    try {
        const [items] = await getAllActive();
        res.json(createPages(items,req)
           
        );
    } catch (error) {
        res.json({fatal: error.message});
    }
    
})
router.get('/user/:userId',checkToken,checkRole('profesor'), async (req,res) => {
    const {userId} = req.params;
    try {
       const [result] = await getByTeacherId(userId);
       const [teacher] = await getUserByAlumnoId(userId);
       if (result.length===0) {
            return res.json({ fatal: 'B No existe un profesor con ese ID'});
       }
        result[0].username = teacher[0].username;
        result[0].email = teacher[0].email;
        res.json(result[0]);
    } catch (error) {
        res.json({fatal: error.message});
    }
})


router.get('/:teacherId', async (req, res) => {
    const {teacherId} = req.params;
    try {
       const [result] = await getById(teacherId);
       if (result.length===0) {
            return res.json({ fatal: ' A No existe un profesor con ese ID'});
       }
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
})

router.post('/map', async (req, res) => {
     
    const [coor] = await geocoder.geocode(req.body.direccion);
    

    const registros_distancias = [];
    try {
        const [result] = await getMap();
        result.forEach(registro => {
            // Convertimos la latitud y longitud a números antes de calcular la distancia
            const latitud_num = Number(registro.latitud);
            const longitud_num = Number(registro.longitud);
            // Calculamos la distancia entre la latitud y longitud ingresadas y cada registro de la base de datos
            const distancia = math.sqrt((coor.latitude - latitud_num) ** 2 + (coor.longitud - longitud_num) ** 2);
            delete registro.password;
            
            registros_distancias.push({ registro, distancia });
          });
        const registros_ordenados = registros_distancias.sort((a, b) => a.distancia - b.distancia);
  // Devolvemos los primeros 5 registros de la base de datos ordenados
        const registros_cercanos = registros_ordenados.slice(0, 5).map(registro => registro.registro);
        res.json(registros_cercanos);
    } catch (error) {
        res.json({fatal: error.message});
    }
})


router.post('/', checkToken,checkRole('profesor'), async (req, res) => {
    try {
        
        await createProfesor(req.body)
        const [teacher] = await getByUserId(req.body.usuario_id);
        res.json(teacher[0]);

    } catch (error) {
        res.json({fatal: error.message});
    }
}
)

router.put('/active/:userId',checkToken,checkRole('admin'), async (req, res) => {
    try {
        const {userId} = req.params;
        await setActive(userId);
        const [teacher] = await getByTeacherId(userId)
        res.json(teacher[0]);
        } catch (error) {
        res.json({fatal: error.message});
        }
})

router.put('/inactive/:userId',checkToken,checkRole('admin'), async (req, res) => {
    try {
        const {userId} = req.params;
        await setInactive(userId);
        const [teacher] = await getByTeacherId(userId)
        res.json(teacher[0]);
        } catch (error) {
        res.json({fatal: error.message});
        }
})



module.exports = router;