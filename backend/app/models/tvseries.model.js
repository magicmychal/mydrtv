const mongoose = require('mongoose');

const TvSeriesSchema = mongoose.Schema({
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
    Type: String, // Is it a movie or a TV Series? Or a Short Series?
    Likes: Number,
    Comments: Array,
    Seasons: Array,
    VideoSource: String // That's the URL for the movie

    
    /*
    Seasons: [{
        SeasonNumber: Number,
        SeasonTitle: String,
        Year: Number,
        Released: Date,
        Plot: String,
        Poster: String
    }],
    Episodes: [{
        SeasonNumber: Number,
        EpisodeNumber: Number,
        EpisodeTitle: String,
        Plot: String,
        Poster: String,  // URL for the poster
        Runtime: Number,  // Always in minutes!
        VideoSource: String // That's the URL for the movie
    }],
    */
    
}, {
    timestamp: true // Automatically will add "Created at", "Updated at"
});

module.exports = mongoose.model('TvSeries', TvSeriesSchema);
