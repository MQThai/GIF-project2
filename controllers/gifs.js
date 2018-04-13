const express = require('express')
const router = express.Router()
const Gifs = require('../models/gifs')

router.get('/', (req, res) => {
  Gifs.find({}).then(gifs => res.render('index', {gifs}))
})

module.exports = router
