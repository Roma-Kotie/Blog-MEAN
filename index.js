const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db')
const app = express();

const port = 3000;

mongoose.connect(config.db);

mongoose.connection.on('conected', () => {
    console.log("Successful connection to the database")
});

mongoose.connection.on('error', (err) => {
    console.log(`No successful connection to the database ${err}`)
});

app.listen(port, () => {
    console.log( `The server is running, port ${port}`);
});

app.get('/', (req, res ) => {
    res.send("Home")
});

