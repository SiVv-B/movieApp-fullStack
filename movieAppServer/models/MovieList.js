const mongoose = require("mongoose");
//model of the movie list 
const movieSchema = mongoose.Schema({
    addedID:Number, 
    title: String,
    poster: String,
    year:Number,
    description: String,
    details: String,
    trailer: String,
})

module.exports=mongoose.model('MovieList',movieSchema);