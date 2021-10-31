const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

// Import routes
const postsRouter = require('./routes/posts')

app.use('/posts', postsRouter)

// Routes
app.get('/', (req,res) => {
    res.send('We are on home')
})

mongoose.connect(process.env.DB_CONNECTION, () => console.log('Database has been connected...'))

app.listen(4231)