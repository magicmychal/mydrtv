
module.exports = (app) => {
    //const useers = require('../controllers/users.controller.js');
    const users = require('../controllers/users.controller');

    // Create a new user
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single user with usersId
    //app.get('/users/:usersId', users.findOne);

    // Update a user with usersId
    app.put('/users/:usersId', users.update);

    // Delete a user with usersId
    app.delete('/users/:usersId', users.delete);

    // Authenticate user
    app.post('/users/login', users.login)
};
