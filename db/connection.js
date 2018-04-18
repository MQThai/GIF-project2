const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/giflibrary')
if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/giflibrary')
}

mongoose.Promise = Promise

module.exports = mongoose
