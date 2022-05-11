import {DataTypes} from 'sequelize'
import {sequelize} from '../database/db.js'

export const User = sequelize.define('User', {
    userName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
})