const express = require('express');
const app = express();

//Error logger


//Database connection
require('./startup/db')();

//Routes
require('./startup/routes')(app);

//PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`INFO: Server is listining to port ${PORT}...`);
});


