const mongoose = require('../db/connection')
const bcrypt = require('bcrypt-nodejs')

const User = mongoose.Schema({
  local: {
    username: String,
    password: String
  }
})

User.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
