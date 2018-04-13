const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/giflibrary')

mongoose.Promise = Promise

module.exports = mongoose
