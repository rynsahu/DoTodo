const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/todo')
        .then(() => console.log('INFO: Connected to MongoDB...'))
        .catch((err) => console.log('ERROR: ' + err.message));
};
