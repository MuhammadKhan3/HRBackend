const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const RolePermission= sequelize.define('role_permission', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},{
    timestamps: true,
    timezone: '+00:00'
});

module.exports = RolePermission;
