const express = require('express')
const hbs = require('hbs')
const app = express()
const gifsController = require('./controllers/gifs')

app.set('view engine', 'hbs')

app.use('/', gifsController)

app.listen(3000, () => console.log('port 3000'))
