const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const app = express();
const account = require('./routes/account');

const PORT = 3000;

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cors());

app.use(bodyParser.json());

// mongoose.connect(config.db);

// mongoose.connection.on('connected', () => {
//     console.log("Successful connection to the database")
// });

// mongoose.connection.on('error', (err) => {
//     console.log(`No successful connection to the database ${err}`)
// });

app.listen(PORT, () => {
    console.log( `The server is running, port ${PORT}`);
});

app.get('/', (req, res ) => {
    res.send("Home")
});

app.use('/account', account);

