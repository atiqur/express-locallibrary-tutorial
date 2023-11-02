const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [3, "Genre should be at least of 3 characters"],
        max: [100, "Genre should not be more than 100 characters long"]
    }
})

GenreSchema.virtual("url").get(function () {
    return `/catalog/genre/${this._id}`
})

module.exports = mongoose.model("Genre", GenreSchema)