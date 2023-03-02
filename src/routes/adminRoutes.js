const express=require('express')
const router=express.Router();
const adminController=require('../controllers/admin.controller');
const managerController=require('../controllers/manager.controller');
const { managerImage } = require('../middleware/multer');

const {validRole,validUser,validManager}=require('../validations/validations');

router.post('/',adminController.createAdmin);
router.post('/insert-role',validRole,adminController.insertRole);
router.post('/create-admin',validUser,adminController.signup);
router.post('/create-manager',managerImage.single('photo'),validManager,managerController.createManager);

module.exports=router;