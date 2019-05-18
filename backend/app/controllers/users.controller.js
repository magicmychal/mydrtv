const User = require('../models/users.model');
const testUser = {email: 'kelvin@gmai.com', password: '1234'};
// DECLARE JWT-secret
const JWT_Secret = 'v$nb^HBVy4kZGrUm03sdCxQ@7JYsyYRyBLJP8&XR@VWoAc';
const jwt = require('jsonwebtoken');

// Create and Save a user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
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
globalUser = undefined;
exports.login = (req, res) => {
    if (req.body) {
        let user = req.body;
        const email = req.body.email;
        console.log(user);
        // find the user first
        /*
        find one by email, return Name, Email, and Password
        execute function if there are any errors.
         */
        User.findOne(
            // what to find
            { Email: req.body.email},
            // what to return
            'Name Email Password',
            // what to execute?
            function (err, user) {
                if (err) return handleError(err);
                console.log(user);
            })
            .then(user => {
                if(!user) {
                    return res.status(404).send({
                        message: "User not found"
                    });
                }
                console.log('user is ' + user.Email + 'compared to ' + req.body.email + ' and password is ' + user.Password + ' compared to ' + req.body.password);

                //authenticate user and create token
                if(user.Email === req.body.email && user.Password === req.body.password) {
                    let token = jwt.sign(email, JWT_Secret);
                    res.status(200).send({
                       signed_user: email,
                       token: token
                    });
                } else {
                    res.status(403).send({
                        errorMessage: 'Authorisation required!'
                    })
                }
            });

        // //authenticate by creating a token
        // if (testUser.email === req.body.email && testUser.password === req.body.password) {
        //     let token = jwt.sign(user, JWT_Secret);
        //     res.status(200).send({
        //         signed_user: user,
        //         token: token
        //     });
        // } else {
        //     res.status(403).send({
        //         errorMessage: 'Authorisation required!'
        //     });
        // }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }
};

// Update a user identified by the flmId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.name) {
        return res.status(400).send({
            message: "Users content can not be empty"
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
            if (!users) {
                return res.status(404).send({
                    message: "Users not found with id " + req.params.usersId
                });
            }
            res.send(users);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.usersId
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
            if (!users) {
                return res.status(404).send({
                    message: "Users not found with id " + req.params.usersId
                });
            }
            res.send({message: "Users deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.usersId
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
