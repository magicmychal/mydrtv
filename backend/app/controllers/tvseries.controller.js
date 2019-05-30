const TvSeries = require('../models/tvseries.model');

// Create nd Save a TvSeries
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "TvSeries title cannot be empty"
        });
    }

    // Create a TvSeries
    const tvseries = new TvSeries ({
        Title: req.body.title,
        Year: req.body.year,
        Rated: req.body.rated, // It's a parental guidance
        Released: req.body.released,
        Runtime: req.body.runtime, // Always in minutes!
        Genre: req.body.genre,
        Director: req.body.director,
        Writer: req.body.writer,
        Actors: req.body.actors, // Only key actors!
        Plot: req.body.plot, // Short description
        Language: req.body.language, // E.X Pusher is in Danish, Swedish, and Serbian.
        Country: req.body.country,
        Awards: req.body.awards || "No awards",
        Poster: req.body.poster, // URL for the poster
        Type: req.body.type, // Is it a movie or a TV Series? Or a Short Series?
        Likes: req.body.likes || 0,
        Comments: req.body.comments || [],
        Seasons: req.body.seasons,
        VideoSource: req.body.videosource // That's the URL for the movie.

    });

    // Save TvSeries in the database
    tvseries.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the TvSeries."
            });
    })
};

// Retrieve and return all TvSeries from the database
exports.findAll = (req, res) => {
    TvSeries.find()
        .then(tvseries => {
            res.send(tvseries);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tvseries."
        });
    });
};

// Find a single TvSeries with a tvseriesId
exports.findOne = (req, res) => {
    TvSeries.findById(req.params.tvseriesId)
        .then(tvseries => {
            if(!tvseries) {
                return res.status(404).send({
                    message: "TvSeries not found with id " + req.params.tvseriesId
                });
            }
            res.send(tvseries);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TvSeries not found with id " + req.params.tvseriesId
            });
        }
        return res.status(500).send({
            message: "Error retrieving tvseries with id " + req.params.tvseriesId
        });
    });
};

// Update a tvseries identified by the tvseriesId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.title) {
        return res.status(400).send({
            message: "TvSeries content can not be empty"
        });
    }

    // Find tvseries and update it with the request body
    TvSeries.findByIdAndUpdate(req.params.tvseriesId, {

        Title: req.body.title,
        Year: req.body.year,
        Rated: req.body.rated, // It's a parental guidance
        Released: req.body.released,
        Runtime: req.body.runtime, // Always in minutes!
        Genre: req.body.genre,
        Director: req.body.director,
        Writer: req.body.writer,
        Actors: req.body.actors, // Only key actors!
        Plot: req.body.plot, // Short description
        Language: req.body.language, // E.X Pusher is in Danish, Swedish, and Serbian.
        Country: req.body.country,
        Awards: req.body.awards || "No awards",
        Poster: req.body.poster, // URL for the poster
        Type: req.body.type, // Is it a movie or a TV Series? Or a Short Series?
        Likes: req.body.likes || 0,
        Comments: req.body.comments || [],
        Seasons: req.body.seasons,
        VideoSource: req.body.videosource // That's the URL for the movie.

    }, {new: true})
        .then(tvseries => {
            if(!tvseries) {
                return res.status(404).send({
                    message: "TvSeries not found with id " + req.params.tvseriesId
                });
            }
            res.send(tvseries);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "TvSeries not found with id " + req.params.tvseriesId
            });
        }
        return res.status(500).send({
            message: "Error updating tvseries with id " + req.params.tvseriesId
        });
    });
};

// Delete a tvseries with the specified tvseriesId in the request
exports.delete = (req, res) => {
    TvSeries.findByIdAndRemove(req.params.tvseriesId)
        .then(tvseries => {
            if(!tvseries) {
                return res.status(404).send({
                    message: "TvSeries not found with id " + req.params.tvseriesId
                });
            }
            res.send({message: "TvSeries deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "TvSeries not found with id " + req.params.tvseriesId
            });
        }
        return res.status(500).send({
            message: "Could not delete tvseries with id " + req.params.tvseriesId
        });
    });
};

exports.testing = (req, res) => {
    return res.status(200).send({
        message: "ok"
    });
};
