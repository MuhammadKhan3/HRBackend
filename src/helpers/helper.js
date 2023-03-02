const logger=require('../logs')
function Error(req,res,error,status=500){
    logger.error(error.message)
    return res.status(status).json({status:false,error:error.message,status:status})
}

module.exports={Error};