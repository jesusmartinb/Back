const { geocoder } = require('../../config/geocoder');
const { create, getById } = require('../../models/personal.model');
const { checkToken, checkRole } = require('../../utils/middlewares');

const router = require('express').Router();

router.post('/teacher',checkToken,checkRole('profesor'), async (req,res) => {
    try {
        const [coor] = await geocoder.geocode(req.body.direccion);
        req.body.latitud = coor.latitude;
        req.body.longitud = coor.longitude;
        const [result] = await create(req.body);
        const [teacher] = await getById(result.insertId);
        res.json(teacher[0]);
  
    } catch (error) {
        res.json({fatal: error.message});
    }
});

router.post('/alumno',checkToken,checkRole('alumno'), async (req, res) => {
    try {
        const [coor] = await geocoder.geocode(req.body.direccion);
        req.body.latitud = coor.latitude;
        req.body.longitud = coor.longitude;
        const [result] = await create(req.body);
        const [teacher] = await getById(result.insertId);
        res.json(teacher[0]);
  
    } catch (error) {
        res.json({fatal: error.message});
    }
});

module.exports = router;
