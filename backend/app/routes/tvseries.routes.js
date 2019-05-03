module.exports = (app) => {
    //const tvseries = require('../controllers/tvseries.controller.js');
    const tvseries = require('../controllers/tvseries.controller');

    // Create a new TvSeries
    app.post('/tvseries', tvseries.create);

    // Retrieve all TvSeries
    app.get('/tvseries', tvseries.findAll);

    // Retrieve a single TvSeries with tvseriesId
    app.get('/tvseries/:tvseriesId', tvseries.findOne);

    // Update a TvSeries with tvseriesId
    app.put('/tvseries/:tvseriesId', tvseries.update);

    // Delete a TvSeries with tvseriesId
    app.delete('/tvseries/:tvseriesId', tvseries.delete);

};
