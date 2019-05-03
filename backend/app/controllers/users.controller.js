const User = require('../models/users.model');

// Create and Save a user
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Username cannot be empty"
        });
    }

    // Create a user
    const users = new User({
        Name: req.body.name,
        LastName: req.body.lastname,
        Email: req.body.email,
        Password: req.body.password,
        Gender: req.body.gender,
        History: req.body.history || []
    });

    // Save user in the database
    users.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
    })
};

// Retrieve and return all users from the database
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single user with a usersId
exports.findOne = (req, res) => {
    User.findById(req.params.usersId)
        .then(users => {
            if(!users) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.usersId
                });
            }
            res.send(users);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.usersId
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.usersId
        });
    });
};

// Update a user identified by the flmId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.usersId, {
        Name: req.body.name,
        LastName: req.body.lastname,
        Email: req.body.email,
        Password: req.body.password,
        Gender: req.body.gender,
        History: req.body.history
        
    }, {new: true})
        .then(users => {
            if(!users) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.usersId
                });
            }
            res.send(users);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.usersId
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.usersId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.usersId)
        .then(users => {
            if(!users) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.usersId
                });
            }
            res.send({message: "User deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.usersId
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.usersId
        });
    });
};

exports.testing = (req, res) => {
    return res.status(200).send({
        message: "ok"
    });
};
