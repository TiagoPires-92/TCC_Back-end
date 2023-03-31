const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const publicRoutes = require('./src/publicRoutes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(publicRoutes)
app.listen(3333)
