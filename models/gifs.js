const mongoose = require('../db/connection')

// I wonder if tags should be an Array type, since it is holding an array of strings in your seed data. This would require adding tags in a different way, like you'd have to push new tags added into an existing array, or use .split on the string returned from the form

// Easier approach:
// You could keep tags as a string, too, and then just have a string for tags like "cat shaq wiggle" instead of ["cat", "shaq", "wiggle"].

// Your approach on the front-end (the handlebars view) uses .includes and would work with this

// You would only run into an issue with this when you saved a gif with new tags or updated an existing
const GifSchema = new mongoose.Schema({
  url: String,
  title: String,
  tags: String
  // tags: Array
})

const Gifs = mongoose.model('Gifs', GifSchema)

module.exports = Gifs
