module.exports = (app) => {
    //const films-redux = require('../controllers/film.controller.js');
    const films = require('../controllers/film.controller');

    // Create a new Film
    app.post('/films-redux', films.create);

    // Retrieve all Films
    app.get('/films-redux', films.findAll);

    // Retrieve a single Film with filmId
    app.get('/films-redux/:filmId', films.findOne);

    // Update a Film with filmId
    app.put('/films-redux/:filmId', films.update);

    // Delete a Film with filmId
    app.delete('/films-redux/:filmId', films.delete);

};
