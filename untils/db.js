const Sequelize = require('sequelize');
const password=process.env.PASSWORD
const user=process.env.USERNAME;
const dbname=process.env.DBNAME
const sequelize = new Sequelize(dbname,user,password , {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports=sequelize;