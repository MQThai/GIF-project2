const express = require('express')
const methodOverride = require('method-override')
const parser = require('body-parser')
const passport = require('passport')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/signup', (req, res) => {
  res.render('signup.hbs', {message: req.flash('signupMessage')})
  console.log(Object.keys(req.flash('signupMessage')))
})

router.post('/signup', (req, res) => {
  const signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})

router.get('/login', (req, res) => {
  res.render('login.hbs', {message: req.flash('loginMessage')})
})

router.post('/login', (req, res) => {
  const loginProperty = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
  return loginProperty(req, res)
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
