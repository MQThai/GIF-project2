const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const router = express.Router()

router.post('/signup', (req, res) => {
  const signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/'
    failureRedirect: '/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})
