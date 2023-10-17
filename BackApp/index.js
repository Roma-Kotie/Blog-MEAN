const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const router = require('./routes/account');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(session({
  secret: 'secret_key', // Замените на свой секретный ключ
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport); // Путь к файлу настройки Passport.js

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//   console.log("Successful connection to the database");
// });

// mongoose.connection.on('error', (err) => {
//   console.log(`No successful connection to the database ${err}`);
// });

app.listen(PORT, () => {
  console.log(`The server is running, port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("Home");
});

// Ваш маршрут для обработки аккаунта (например, /account)
app.use('/account', router); // Убедитесь, что путь к маршруту корректен
