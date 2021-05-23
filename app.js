var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')
var validateSession = require('./middleware/validate-session');

const Port = 4000;

db.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use(validateSession);
app.use('/api/game', game);
app.listen(Port, function() {
    console.log(`App is listening on ${Port}`);
})