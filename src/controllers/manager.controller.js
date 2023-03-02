const Manager=require('../services/manager.service')


exports.createManager=async (req,res,next)=>{
    const data=req.body;
    console.log(data)
    console.log(req.file)
    console.log(req.files)

    try {
        const response=await Manager.createManager(data);
        

    } catch (error) {
        return Error(req,res,error);
    }
}