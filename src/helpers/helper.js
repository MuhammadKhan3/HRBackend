
function Error(req,res,error,status=500){
    console.log(error)
    return res.status(status).json({status:false,error:error.message,status:status})
}

module.exports={Error};