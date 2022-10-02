const express = require('express')
const cors = require('cors')
const { Camionero } = require('./databasee/models')
const app = express()

const sequelize = require('./databasee/sequelize')
const router = require('./routes')
require('./databasee/associations')

const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', router)

app.listen(port, () => {
    console.log(`Server en puerto ${port}`)

    sequelize.sync({ alter: false }).then(() => {
        console.log('Sincronizado')
    })
})