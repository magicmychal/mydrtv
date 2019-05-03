const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Successfully connected to the database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now');
    process.exit();
});


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Nothing to see here"});
});

// Require Films routes
require('./app/routes/film.routes.js')(app);

// Require users routes
require('./app/routes/users.routes.js')(app);

// Require TvSeries routes
require('./app/routes/tvseries.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
