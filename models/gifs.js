const mongoose = require('../db/connection')

const GifSchema = new mongoose.Schema({
  url: String,
  title: String,
  tags: String
})

const Gifs = mongoose.model('Gifs', GifSchema)

module.exports = Gifs
