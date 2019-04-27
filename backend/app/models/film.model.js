const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
    Title: String,
    Year: Number,
    Rated: String, // It's a parental guidance
    Released: Date,
    Runtime: Number, // Always in minutes!
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String, // Only key actors!
    Plot: String, // Short description
    Language: String, // E.X Pusher is in Danish, Swedish, and Serbian.
    Country: String,
    Awards: String,
    Poster: String, // URL for the poster
    Likes: Number,
    Type: String // Is it a movie or a TV Series? Or a Short Series?
}, {
    timestamp: true // Automatically will add "Created at", "Updated at"
});

module.exports = mongoose.model('Film', FilmSchema);
