const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')

const app = express()

const gifsController = require('./controllers/gifs')

app.set('view engine', 'hbs')
app.use(parser.urlencoded({extended: true}))

app.use('/', gifsController)

app.listen(3000, () => console.log('port 3000'))
