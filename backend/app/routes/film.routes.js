module.exports = (app) => {
    //const films = require('../controllers/film.controller.js');
    const films = require('../controllers/film.controller');

    // Create a new Film
    app.post('/films', films.create);

    // Retrieve all Films
    app.get('/films', films.findAll);

    // Retrieve a single Film with filmId
    app.get('/films', films.findOne);

    // Update a Film with filmId
    app.put('/films/:filmId', films.update);

    // Delete a Film with filmId
    app.delete('/films/:filmId', films.delete);

    // testing
    app.get('/testing', films.testing);

    app.get('/dupa', (req, res) => {
        res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
    });
}
