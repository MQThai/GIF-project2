const express = require('express')
const flash = require('flash')
const hbs = require('hbs')
const methodOverride = require('method-override')
const parser = require('body-parser')
const passport = require('passport')
const passportConfig = require('./config/passport')
const session = require('express-session')

const app = express()
const gifsController = require('./controllers/gifs')
const usersController = require('./controllers/users')

app.set('view engine', 'hbs')
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(flash())
app.use(parser())

passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', gifsController)
app.use('/', usersController)

app.listen(3000, () => console.log('port 3000'))
