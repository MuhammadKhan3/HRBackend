const Role = require("../models/role")
const {Error}=require('../helpers/helper')
const { Login} = require("../services/public.service")
const jwt=require('jsonwebtoken')
require('dotenv').config();



exports.login=async (req,res,next)=>{
    const {email,password}=req.body;
    try {
        const secret=process.env.secretKey;
        console.log(secret)
        const response=await Login(req,res,email,password);
        var token =await jwt.sign(response, secret,{ expiresIn: '1d' });
        return res.status(200).json({status:true,msg:"User Login Succefully",response:response,token:token}) 
    } catch (error) {
      return Error(req,res,error);   
    }
  }