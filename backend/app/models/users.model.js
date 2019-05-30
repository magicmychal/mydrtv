const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Gender: String,
    History: Array
}, {
    timestamp: true // Automatically will add "Created at", "Updated at"
});

module.exports = mongoose.model('Users', UsersSchema);