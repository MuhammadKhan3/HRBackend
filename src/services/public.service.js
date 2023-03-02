const {Op} =require('sequelize')
const User=require('../models/user');


const bcrypt=require('bcryptjs');
const Permission = require('../models/permission');
const { LoginDto } = require('../dto/dto');

const Login=async(req,res,email,password)=>{

    // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    const user = await User.findOne({
        where: {
            [Op.and]:[{email:email},{status:true}]
        },
        include:{all:true}
    });
    let verify=await bcrypt.compare(password, user.password);

    if(verify){
        return LoginDto(user);
    }else{
        res.json({msg:"User Not Exist",flag:false})
    }
}

module.exports={Login};