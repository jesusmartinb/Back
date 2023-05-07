const {  getById, create, update, deleteById, getMap, getAllInactive, setActive, getByUserId } = require('../../models/teachers.model');
const {checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();
const math = require('mathjs');


router.get('/', checkToken,checkRole('admin'),async (req, res) => {
    try {
        const [items] = await getAllInactive();
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

router.get('/map/:latitud/:longitud', async (req, res) => {
    const { latitud, longitud } = req.params;
    const registros_distancias = [];
    try {
        const [result] = await getMap();
        result.forEach(registro => {
            // Convertimos la latitud y longitud a números antes de calcular la distancia
            const latitud_num = Number(registro.latitud);
            const longitud_num = Number(registro.longitud);
            // Calculamos la distancia entre la latitud y longitud ingresadas y cada registro de la base de datos
            const distancia = math.sqrt((latitud - latitud_num) ** 2 + (longitud - longitud_num) ** 2);
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

router.get('/user/:userId',checkToken,checkRole('profesor'), async (req,res) => {
    const {userId} = req.params;
    try {
       const [result] = await getByUserId(userId);
       if (result.length===0) {
            return res.json({ fatal: 'No existe un profesor con ese ID'});
       }
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
            return res.json({ fatal: 'No existe un profesor con ese ID'});
       }
        res.json(result);
    } catch (error) {
        res.json({fatal: error.message});
    }
})

router.post('/', checkToken,checkRole('profesor'), async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [teacher] = await getById(result.insertId);
        res.json(teacher[0]);

    } catch (error) {
        res.json({fatal: error.message});
    }
}
)

router.put('/:teacherId', checkToken,checkRole('admin'),async (req, res) => {
    try {
    const {teacherId} = req.params;
    await update(teacherId, req.body);
    const [teacher] = await getById(teacherId)
    res.json(teacher[0]);
    } catch (error) {
    res.json({fatal: error.message});
}

})


router.put('/active/:teacherId',checkToken,checkRole('admin'), async (req, res) => {
    try {
        const {teacherId} = req.params;
        await setActive(teacherId);
        const [teacher] = await getById(teacherId)
        res.json(teacher[0]);
        } catch (error) {
        res.json({fatal: error.message});
        }
})


router.delete('/:teacherId',checkToken,checkRole('admin'), async (req, res) => {

    const {teacherId} = req.params;
    try {
    const [teacher] = await getById(teacherId)
    await deleteById(teacherId);
    res.json(teacher[0]);
    } catch(error){
        res.json({fatal: error.message});
    }

})

module.exports = router;