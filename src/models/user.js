const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const User = sequelize.define('User', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  status:{
    type:DataTypes.ENUM,
    values: ['active', 'inactive']
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
