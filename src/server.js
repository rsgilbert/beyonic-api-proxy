const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()


const app = express()

// middleware
app.use(morgan('common'))
app.use(cors())


const port = 3000


app.get('/', (req, res) => {
    res.send('Hello')
})




app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

