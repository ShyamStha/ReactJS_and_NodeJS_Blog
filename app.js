const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/route')
app.use(express.json())
app.use(routes)
mongoose.connect('mongodb://localhost/fulldb', { useNewUrlParser: true, useFindAndModify: true })
mongoose.Promise = global.Promise
app.listen(3001, function () {
    console.log('The server has started at port number 3001')
})