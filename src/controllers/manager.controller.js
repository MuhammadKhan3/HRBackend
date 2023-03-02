const Manager=require('../services/manager.service')


exports.createManager=async (req,res,next)=>{
    const {name,phone,email,password,status,module,userId}=req.body;


    try {
        const response=await Manager.createManager(req.file,name,phone,email,password,status,module,userId);
        res.json({msg:"Manager Successfully Created",flag:true,response:response})

    } catch (error) {
        return Error(req,res,error);
    }
}