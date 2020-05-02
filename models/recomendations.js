const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recomendationSchema = new Schema({
title:{
    type:String,
    required:true,
},
artist:{
    type:String,
    required:true
},
linkToListen:{
    type:String,
},
imageUrl:{
    type:String
}   
})

var Recomendations = mongoose.model('Recomendation',recomendationSchema)
module.exports = Recomendations