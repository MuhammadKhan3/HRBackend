const {insertRoleDto,signupDto}=require('../dto/admin.dto');
const Permission = require('../models/permission');
const Role=require('../models/role');
const User = require('../models/user');
var bcrypt = require('bcryptjs');
const Manager = require('../models/manager');



const createManager=async ({name,phone,photo,email,password,status,module})=>{
        const roles=await Role.findOne({where:{roleName:'manager'}});
        // let modulejson={
        //     employee:{view:true,add:true,edit:true,delete:true},
        //     attendance:{view:true,add:true},
        //     leave:{view:true,add:true,edit:true,delete:true},
        //     payslip:{view:true,add:true,delete:true},
        //     perfomance:{view:true,add:true},
        //     recruitment:{view:true,add:true},
        //     daily:{work:true,notification:true,quote:true}
        // }

        // const permission=await Permission.create({
        //     module:module,
        //     active:true,
        // })
        // var hash = bcrypt.hashSync(password, 8);
        
        // const User=await User.create({
        //     email:email,
        //     password:hash,
        //     permissionId:permission?.id,
        //     roleId:roles?.id,
        //     status:status,
        // })

        // const Manager=await Manager.create({

        // })


        return signupDto(response);
}

module.exports={createManager};