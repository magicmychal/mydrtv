const Film = require('../models/film.model');

// Create nd Save a Film
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "Film title cannot be empty"
        });
    }

    // Create a Film
    const film = new Film({
        Title: req.body.title,
        Year: req.body.year,
        Rated: req.body.rated, // It's a parental guidance
        Released: req.body.released,
        Runtime: req.body.runtime``, // Always in minutes!
        Genre: req.body.genre,
        Director: req.body.director,
        Writer: req.body.writer,
        Actors: req.body.actors, // Only key actors!
        Plot: req.body.plot, // Short description
        Language: req.body.language, // E.X Pusher is in Danish, Swedish, and Serbian.
        Country: req.body.country,
        Awards: req.body.awards,
        Poster: req.body.poster, // URL for the poster
        Likes: req.body.likes,
        Type: req.body.type // Is it a movie or a TV Series? Or a Short Series?
    });

    // Save Film in the database
    film.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Film."
            });
    })
};

// Retrieve and return all Films from the database
exports.findAll = (req, res) => {
    Film.find()
        .then(films => {
            res.send(films);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving films."
        });
    });
};

// Find a single Film with a filmId
exports.findOne = (req, res) => {
    Film.findById(req.params.filmId)
        .then(film => {
            if(!film) {
                return res.status(404).send({
                    message: "Film not found with id " + req.params.filmId
                });
            }
            res.send(film);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Film not found with id " + req.params.filmId
            });
        }
        return res.status(500).send({
            message: "Error retrieving film with id " + req.params.filmId
        });
    });
};

// Update a film identified by the flmId in the request
exports.update = (res, req) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Film content can not be empty"
        });
    }

    // Find film and update it with the request body
    Film.findByIdAndUpdate(req.params.filmId, {
        title: req.body.title || "Untitled Film",
        content: req.body.content
    }, {new: true})
        .then(film => {
            if(!film) {
                return res.status(404).send({
                    message: "Film not found with id " + req.params.filmId
                });
            }
            res.send(film);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Film not found with id " + req.params.filmId
            });
        }
        return res.status(500).send({
            message: "Error updating film with id " + req.params.filmId
        });
    });
};

// Delete a film with the specified filmId in the request
exports.delete = (req, res) => {
    Film.findByIdAndRemove(req.params.filmId)
        .then(film => {
            if(!film) {
                return res.status(404).send({
                    message: "Film not found with id " + req.params.filmId
                });
            }
            res.send({message: "Film deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Film not found with id " + req.params.filmId
            });
        }
        return res.status(500).send({
            message: "Could not delete film with id " + req.params.filmId
        });
    });
};

exports.testing = (req, res) => {
    return res.status(200).send({
        message: "ok"
    });
};
