const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = function (passport) {
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, callback) {
    User.findOne({'local.username': username}, function (err, user) {
      if (err) return callback(err)
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This username is already taken.'))
      } else {
        const newUser = new User()
        newUser.local.username = username
        newUser.local.password = newUser.encrypt(password)
        newUser.save(function (err) {
          if (err) throw err
          return callback(null, newUser)
        })
      }
    })
  }))
}
