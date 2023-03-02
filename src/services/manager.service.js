const {insertRoleDto,signupDto}=require('../dto/dto');
const Permission = require('../models/permission');
const Role=require('../models/role');
const User = require('../models/user');
var bcrypt = require('bcryptjs');
const Manager = require('../models/manager');



const createManager=async (photo,name,phone,email,password,status,module,userId)=>{
        const roles=await Role.findOne({where:{roleName:'manager'}});


            const permission=await Permission.create({
                module:module,
                active:true,
            })
            var hash = bcrypt.hashSync(password, 8);
            
            const user=await User.create({
                email:email,
                password:hash,
                permissionId:permission?.id,
                roleId:roles?.id,
                status:status,
            })
    
                const manager=await Manager.create({
                    name:name,
                    email:email,
                    status:status,
                    phone:phone,
                    photo:photo,
                    userId:user.id
                })           
                    

        return manager ;
}

module.exports={createManager};