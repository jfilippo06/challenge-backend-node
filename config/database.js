require('dotenv').config()

module.exports = {
    dialect: process.env.DIALECT,
    storage: process.env.URI,

    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',

    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations'
}
