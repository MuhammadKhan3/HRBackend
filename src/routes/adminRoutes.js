const express=require('express')
const router=express.Router();
const adminController=require('../controllers/admin.controller');
const {validRole,validUser}=require('../validations/admin.validation')

router.post('/',adminController.createAdmin)
router.post('/insert-role',validRole,adminController.insertRole);
 router.post('/create-user',validUser,adminController.signup)

module.exports=router;