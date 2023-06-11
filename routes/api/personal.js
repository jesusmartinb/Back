const { geocoder } = require('../../config/geocoder');
const { create, getById, upload } = require('../../models/personal.model');
const { checkToken, checkRole } = require('../../utils/middlewares');
const multer = require('multer');
const fs = require('fs');

const router = require('express').Router();

router.post('/teacher', checkToken, checkRole('profesor'), async (req, res) => {
    try {
        const [coor] = await geocoder.geocode(req.body.direccion);
        req.body.latitud = coor.latitude;
        req.body.longitud = coor.longitude;
        const [result] = await create(req.body);
        const [teacher] = await getById(result.insertId);
        res.json(teacher[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/alumno', checkToken, checkRole('alumno'), async (req, res) => {
    try {
        const [coor] = await geocoder.geocode(req.body.direccion);
        req.body.latitud = coor.latitude;
        req.body.longitud = coor.longitude;
        const [result] = await create(req.body);
        const [teacher] = await getById(result.insertId);
        res.json(teacher[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// configuración de subida
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/avatars/')
    },
    filename: (req, file, cb) => {
        cb(null, 'avatar-' + Date.now() + '-' + file.originalname);
    }
});

const uploads = multer({ storage });

router.put('/upload/:id', [checkToken, uploads.single('file0')], async (req, res) => {
    // recoger el fichero de imagen y comprobar que existe
    if (!req.file) {
        return res.status(404).send({
            status: 'error',
            message: 'Petición no incluye la imagen'
        });
    }
    // Conseguir el nombre del archivo
    let image = req.file.originalname;

    // Sacar la extensión del archivo
    const imageSplit = image.split("\.");
    const extension = imageSplit[1];

    // Comprobar extensión
    if (extension != 'png' && extension != 'jpg' && extension != 'jpeg' && extension != 'gif') {
        // Si ext no correcta borrar archivo subido
        const filePath = req.file.path;
        // console.log(filePath);

        const fileDeleted = fs.unlinkSync(filePath);
        return res.status(400).send({
            status: 'error',
            message: 'Extensión del fichero invalida'
        })

    }

    // Si es correcta guardar imagen en bbdd
    const { id } = req.params;
    try {
        const [imagen] = await upload(id, { foto: req.file.filename });
        if (imagen.length === 0) return res.status(404).json({
            status: "error",
            msg: `Error en la subida de la imagen`
        })
        // Devolver respuesta
        return res.status(200).send({
            status: "success",
            user: req.user,
            file: req.file,

        });
    } catch (error) {
        res.json({ error: error.message })
    }


});

module.exports = router;
