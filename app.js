const express=require('express');
const app=express();
const db=require('./untils/db')
const winston = require('winston');
const sequelize = require('./untils/db');
const User=require('./models/user')
const Employee = require('./models/employee');
const Role = require('./models/role');
const Permission = require('./models/permission');
const RolePermission = require('./models/role_permission');

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


// Error Handler
app.use((error,req,res,next)=>{})


// RelationShips Role and Permissions
Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });

// RelationShips Role entity and user entity





sequelize.sync().then(() => {
  console.log('Models synchronized successfully.');
}).catch((error) => {
  console.error('Error synchronizing models:', error);
});



module.exports=app;