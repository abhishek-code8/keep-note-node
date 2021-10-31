let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const api = require('./api/v1');
const db = require('./db');


// body parser - gives data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/v1',api);

db.createMongoConntection();
dbConnection = db.getMongoConnection();


module.exports = app;
