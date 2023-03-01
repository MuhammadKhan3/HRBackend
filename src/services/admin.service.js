const {insertRoleDto,signupDto}=require('../dto/admin.dto');
const Permission = require('../models/permission');
const Role=require('../models/role');
const User = require('../models/user');

const InsertRole=async (roleName)=>{
    const response=await Role.create({roleName:roleName});
    return response;
}

const Signup=async (email,password)=>{
        const roles=await Role.findOne({where:{roleName:'admin'}});
        console.log('id...',roles?.id)
        let modulejson={
            employee:{view:true,add:true,edit:true,delete:true},
            attendance:{view:true,add:true},
            leave:{view:true,add:true,edit:true,delete:true},
            payslip:{view:true,add:true,delete:true},
            perfomance:{view:true,add:true},
            recruitment:{view:true,add:true},
            daily:{work:true,notification:true,quote:true}
        }

        const permission=await Permission.create({
            module:modulejson,
            active:true,
        })
        const response=await User.create({
            email:email,
            password:password,
            permissionId:permission?.id,
            roleId:roles?.id,
            status:'active',
        })
        return signupDto(response);
}

module.exports={InsertRole,Signup};