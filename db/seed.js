const Gifs = require('../models/gifs')
const seedData = require('./seeds.json')

Gifs.remove({})
  .then(() => {
    return Gifs.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
