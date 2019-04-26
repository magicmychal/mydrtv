const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Film', FilmSchema);
