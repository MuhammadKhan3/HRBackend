const express=require('express')
const router=express.Router();
const adminController=require('../controllers/admin.controller');
const managerController=require('../controllers/manager.controller');
const { managerImage } = require('../middleware/multer');
const isAuth=require('../middleware/authorize')

const {validRole,validUser,validManager, validEditManager}=require('../validations/validations');

// Admin Controller
router.post('/',adminController.createAdmin);
router.post('/insert-role',validRole,adminController.insertRole);
router.post('/create-admin',validUser,adminController.signup);

// Manager
router.post('/create-manager',isAuth,managerImage.single('photo'),validManager,managerController.createManager);
router.put('/create-manager',isAuth,managerImage.single('photo'),validEditManager,managerController.editManager);
router.get('/get-managers',managerController.getManagers);

module.exports=router;