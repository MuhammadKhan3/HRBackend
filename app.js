const express=require('express');
const app=express();
const db=require('./src/untils/db')
const sequelize = require('./src/untils/db');
const User=require('./src/models/user')
const Employee = require('./src/models/employee');
const Role = require('./src/models/role');
const Permission = require('./src/models/permission');
const adminRoutes=require('./src/routes/adminRoutes');
const logger=require('./src/logs')
const version1='v1';

app.use(express.json());



// `${version1}/admin`
app.use('/admin',adminRoutes)


// Error Handler
app.use((error,req,res,next)=>{
console.log('issue',error)  
})


// RelationShips Role and Permissions
Role.hasOne(User);
User.belongsTo(Role);

Permission.hasOne(User);
User.belongsTo(Permission);

// RelationShips Role entity and user entity




// My sql database create
sequelize
.sync()
.then(() => {
  console.log('Models synchronized successfully.');
})
.catch((error) => {
  console.error('Error synchronizing models:', error);
});



module.exports=app;