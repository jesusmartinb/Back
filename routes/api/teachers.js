const { getAll, getById, create, update, deleteById, getMap } = require('../../models/teachers.model');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        const [items] = await getAll();
        const perPage = 5; // número de elementos por página
        let page = req.query.page || 1; // página solicitada (por defecto es la primera)
        page = parseInt(page); 
        const startIndex = (page - 1) * perPage; // índice de inicio de la página
        const endIndex = startIndex + perPage; // índice final de la página
        const results = items.slice(startIndex, endIndex); // elementos de la página solicitada
        res.send({
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

router.get('/map', async (req, res) => {
    
    try {
        const [result] = await getMap();
        res.json(result);
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

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [teacher] = await getById(result.insertId);
        res.json(teacher[0]);

    } catch (error) {
        res.json({fatal: error.message});
    }
}
)

router.put('/:teacherId', async (req, res) => {
    try {
    const {teacherId} = req.params;
    await update(teacherId, req.body);
    const [teacher] = await getById(teacherId)
    res.json(teacher[0]);
    } catch (error) {
    res.json({fatal: error.message});
}

})

router.delete('/:teacherId', async (req, res) => {

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