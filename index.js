const express = require('express')
const hbs = require('hbs')
const methodOverride = require('method-override')
const parser = require('body-parser')
const passport = require('passport')
const passportConfig = require('./config/passport')

const app = express()
const gifsController = require('./controllers/gifs')

app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', gifsController)

app.listen(3000, () => console.log('port 3000'))
