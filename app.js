'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/api', api)
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/', (req, res) => {
    res.render('nota')
  })



module.exports = app