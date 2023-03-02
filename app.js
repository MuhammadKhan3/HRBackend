const express=require('express');
const app=express();
const db=require('./src/untils/db')
const sequelize = require('./src/untils/db');
const User=require('./src/models/user')
const Employee = require('./src/models/employee');
const Role = require('./src/models/role');
const Permission = require('./src/models/permission');
const adminRoutes=require('./src/routes/adminRoutes');
const logger=require('./src/logs');
const bodyParser=require('body-parser')
const Manager = require('./src/models/manager');
const version1='v1';

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

// app.use(express.urlencoded())


app.use('/admin',adminRoutes)


// Error Handler
// app.use((error,req,res,next)=>{
// console.log('issue',error)  
// })


// RelationShips Role and Permissions
Role.hasOne(User,
{
  foreignKey: {
    allowNull: false
  }
});
User.belongsTo(Role);

// RelationShips Role entity and user entity
Permission.hasOne(User,{
  foreignKey: {
    allowNull: false
  }
});
User.belongsTo(Permission);


// Manager Relation with User
User.hasOne(Manager,{
  foreignKey: {
    allowNull: false
  }
});
Manager.belongsTo(User)




// My sql database create
sequelize
.sync({force:true})
.then(() => {
  console.log('Models synchronized successfully.');
})
.catch((error) => {
  console.error('Error synchronizing models:', error);
});



module.exports=app;