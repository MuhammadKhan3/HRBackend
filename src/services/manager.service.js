const {insertRoleDto,signupDto}=require('../dto/dto');
const Permission = require('../models/permission');
const Role=require('../models/role');
const User = require('../models/user');
var bcrypt = require('bcryptjs');
const Manager = require('../models/manager');
const sequelize=require('../untils/db')


const createManager=async (req,res,photo,name,phone,email,password,status,module,userId)=>{
        const transaction = await sequelize.transaction();

        
        const roles=await Role.findOne({where:{roleName:'manager'}});
        try{
            const permission=await Permission.create({
                module:module,
                active:true,
            },{transaction})
            var hash = bcrypt.hashSync(password, 8);
            
            const user=await User.create({
                email:email,
                password:hash,
                permissionId:permission?.id,
                roleId:roles?.id,
                status:status,
            },{transaction})
    
            const manager=await Manager.create({
                    name:name,
                    email:email,
                    status:status,
                    phone:phone,
                    photo:photo,
                    userId:user?.id,
                    createId:req?.user?.id
            },{transaction})           
            await transaction.commit(); 
            return manager;
            
        } catch (error) {
            console.log(error)
            if(transaction) {
                await transaction.rollback();
                Error(req,res,error.message,500)
            }
        }

}


const editManager=async (photo,name,phone,email,password,status,module,userId)=>{
    
    // const roles=await Role.findOne({where:{roleName:'manager'}});
        var hash = bcrypt.hashSync(password, 8);
        const user=await User.update({
            email:email,
            password:hash,
            status:status,
        },{
            where:{
                email:email
            }
        })
        console.log(user);
        // permissionId:permission?.id,
        // roleId:roles?.id,

    //     const permission=await Permission.create({
    //         module:module,
    //         active:true,
    //     })
        


    //         const manager=await Manager.create({
    //             name:name,
    //             email:email,
    //             status:status,
    //             phone:phone,
    //             photo:photo,
    //             userId:user.id
    //         })           
                

    // return manager ;
}



const getManagers=async (offset,limit)=>{
    const response=await Manager.findAll({where:{deletedAt:null},offset: offset,limit: limit},{include:User});
    // const data=await 
    return response
}


module.exports={createManager,editManager,getManagers};