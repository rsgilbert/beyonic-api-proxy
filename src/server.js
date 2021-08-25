const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const proxy = require('./proxy')

const app = express()

// middleware
app.use(morgan('dev'))
app.use(cors())

// Handles beyonic requests
app.use(proxy)

const port = process.env.PORT 


app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

