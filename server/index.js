const express = require('express')
const app = express()
const cors = require('cors')

// middlewares

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes

app.use(require('./routes/users.routes'))

// Listend 

app.listen(8000, () => {
    console.log('server on port 8000')
})