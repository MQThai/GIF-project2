const express = require('express')
const router = express.Router()
const Gifs = require('../models/gifs')
const parser = require('body-parser')
const methodOverride = require('method-override')

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

// update route
router.get('/edit/:id', (req, res) => {
  Gifs.findOne({_id: req.params.id}).then(gif => res.render('edit', {gif}))
})

router.put('/:id', (req, res) => {
  Gifs.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(gif => res.redirect('/'))
})

// delete route
router.delete('/:id', (req, res) => {
  Gifs.findOneAndRemove({_id: req.param.id}).then(() => res.redirect('/'))
})

module.exports = router
