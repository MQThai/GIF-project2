const express = require('express')
const flash = require('connect-flash')
const hbs = require('hbs')
const methodOverride = require('method-override')
const parser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const passportConfig = require('./config/passport')
const session = require('express-session')

const app = express()
const gifsController = require('./controllers/gifs')
const usersController = require('./controllers/users')

app.use(parser())
app.use(cookieParser())

app.use(session({secret: 'GIFLibrary'}))
app.use(flash())

passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/assets', express.static('public'))
app.use(methodOverride('_method'))
app.use(parser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.get('/', (req, res) => {
  res.redirect('/gifs')
})

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', usersController)
app.use('/gifs', gifsController)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
