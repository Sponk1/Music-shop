const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    middle_name: {type: DataTypes.STRING},
    bank_details: {type: DataTypes.STRING},
    available: {type: DataTypes.BOOLEAN, defaultValue: true}
})