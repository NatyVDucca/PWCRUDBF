const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Camionero extends Model {}

Camionero.init({
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Camionero',
    tableName: 'Camioneros'
})

module.exports = Camionero