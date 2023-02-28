const Sequelize = require('sequelize');
console.log(process.env.PORT)
const sequelize = new Sequelize('hrm', 'root', 'ahmad327', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports=sequelize;