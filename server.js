const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const brewery = require('./routes/brewery');
const beer = require('./routes/beer');
const search = require('./routes/search');
const beers = require('./routes/beers');
const taran = require('./routes/taran');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// fire up server
app.listen(process.env.PORT, function() {
    console.log('BreweryBrawl app listening on port ' + process.env.PORT + '!');
});

app.use('/', index);

app.use(brewery);

app.use(beer);

app.use(search);

app.use(beers);

app.use(taran);
