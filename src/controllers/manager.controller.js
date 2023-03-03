const Manager=require('../services/manager.service')
const {Error}=require('../helpers/helper')

exports.createManager=async (req,res,next)=>{
    const {name,phone,email,password,status,module,userId}=req.body;


    try {
        const response=await Manager.createManager(req,res,req.file,name,phone,email,password,status,module,userId);
        res.json({msg:"Manager Successfully Created",flag:true,response:response})

    } catch (error) {
        return Error(req,res,error);
    }
}


exports.editManager=async (req,res,next)=>{
    const {name,phone,email,password,status,module,userId}=req.body;

    try {
        const response=await Manager.editManager(req.file,name,phone,email,password,status,module,userId);
        // res.json({msg:"Manager Successfully Edit",flag:true,response:response})
    } catch (error) {

         return Error(req,res,error);
    }
}


exports.getManagers=async (req,res,next)=>{
    try {
        const response=await Manager.getManagers();
        res.json(response)
        // res.json({msg:"Manager Successfully Edit",flag:true,response:response})
    } catch (error) {

         return Error(req,res,error);
    }
}