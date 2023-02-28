const express=require('express');
const app=express();
const db=require('./untils/db')
const winston = require('winston');
const User=require('./models/user')

// Define the logger configuration
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/response.log', level: 'http' })
  ]
});



app.

module.exports=app;