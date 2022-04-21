const express = require('express')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

// instantiate express app
const app = express()

//setup express app
app.use(express.json())
app.use('/api/v1/users', userRoutes)

// port number
const PORT = process.env.PORT || 8080

// start server
app.listen(PORT, () => {
    console.log(`Server started. Listening on port ${PORT}`)
})