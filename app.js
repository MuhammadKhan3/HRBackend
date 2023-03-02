const express=require('express');
const app=express();
const db=require('./src/untils/db')
const sequelize = require('./src/untils/db');
const User=require('./src/models/user')
const Employee = require('./src/models/employee');
const Role = require('./src/models/role');
const Permission = require('./src/models/permission');
const logger=require('./src/logs');
const bodyParser=require('body-parser')
const Manager = require('./src/models/manager');
// Routes
const adminRoutes=require('./src/routes/adminRoutes');
const Api=require('./src/routes/apiRoutes');

const version1='v1';

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

// app.use(express.urlencoded())



app.use('/api/admin',adminRoutes)
app.use('/api',Api)
// app.use('/api/login',Api)

// Error Handler
// app.use((error,req,res,next)=>{
// console.log('issue',error)  
// })


// RelationShips Role and Permissions
Role.hasMany(User,
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
User.hasOne(Manager,{foreignKey:'userId',allowNull:false});
Manager.belongsTo(User,{foreignKey: 'userId'})

User.hasMany(Manager,{foreignKey:'creatId',allowNull:false})
Manager.belongsTo(User,{foreignKey: 'userId'})




// My sql database create
sequelize
.sync({alter:true})
.then(() => {
  console.log('Models synchronized successfully.');
})
.catch((error) => {
  console.error('Error synchronizing models:', error);
});



module.exports=app;