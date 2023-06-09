const { createMsg, getMsg } = require('../../models/mensaje.model');
const { checkToken } = require('../../utils/middlewares');

const router = require('express').Router();





router.post('/enviarMensaje',checkToken, async (req, res) => {
    try {
        const [result] = await createMsg(req.body);
        if (result.insertId) {
            res.json('Mensaje Insertado');
        }
        
     } catch (error) {
         res.json({fatal: error.message});
     }
   
});

router.post('/',checkToken, async (req, res) => {
    try {
        const [result] = await getMsg(req.body);
        
        res.json(result);
        
        
     } catch (error) {
         res.json({fatal: error.message});
     }
   
});



module.exports = router;