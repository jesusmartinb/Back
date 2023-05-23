const { getByAdminId } = require('../../models/admin.model');
const { checkRole, checkToken } = require('../../utils/middlewares');

const router = require('express').Router();

router.get('/:adminId',checkToken,checkRole('admin'), async (req, res) => {
    const {adminId} = req.params;
    try {
        const [result] = await getByAdminId(adminId);
      
        delete result[0].password
        res.json(result[0]);
        
        
     } catch (error) {
         res.json({fatal: error.message});
     }
   
});


module.exports = router;