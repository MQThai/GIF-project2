const express = require('express')
const router = express.Router()
const Gifs = require('../models/gifs')

// index route
router.get('/', (req, res) => {
  Gifs.find({}).then(gifs => res.render('index', {gifs}))
})

// new route
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  Gifs.create(req.body).then(gif => res.redirect('/'))
})

// show route
router.get('/:id', (req, res) => {
  Gifs.findOne({_id: req.params.id}).then(gif => res.render('show', {gif}))
})

module.exports = router
