const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db');
const User = require('./user');

const Manager= sequelize.define('manager', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM,
        values: ['active', 'inactive']
    },
},{
    timestamps: true,
    timezone: '+00:00'
});

module.exports = Manager;
