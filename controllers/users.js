const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/signup', (req, res) => {
  res.render('signup.hbs', {message: req.flash('signupMessage')})
})

router.post('/signup', (req, res) => {
  const signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})
