const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Recomendations = require('../models/recomendations')
const recomendationsRouter = express.Router()
recomendationsRouter.use(bodyParser.json())
recomendationsRouter.route('/')
.get((req,res,next) => {
    Recomendations.find({}).then((recomendations) => {
        res.statusCode = 200
        res.setHeader('Content-Type','application/json')
        res.json(recomendations)
    }, (err) => next(err))
    .catch((err) => next(err))
})
.post((req,res,next) => {
    Recomendations.create(req.body)
    .then((recomendation) => {
        res.statusCode = 200
        res.setHeader('Content-Type','application/json')
        res.json(recomendation)
    }, (err) => next(err))
    .catch((err) => next(err))
})
module.exports = recomendationsRouter;