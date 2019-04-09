const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// render our index page
app.get('/', function(req, res) {
    res.render('index', { breweries: null, error: null });
});

// render our taran easter egg page
app.get('/taran', function(req, res) {
    res.render('taran', { search: false });
});

// fire up server
app.listen(process.env.PORT, function() {
    console.log('BreweryBrawl app listening on port ' + process.env.PORT + '!');
});

// call Untappd API and render index page
app.post('/', function(req, res) {
    let query = req.body.query;
    let url = `https://api.untappd.com/v4/search/brewery?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}&q=${query}`;

    // taran easter egg page if you search for "taran"
    if (query.includes('taran')) {
        res.render('taran', { search: true });
    } else {
        request(url, function(err, response, body) {
            if (err) {
                res.render('index', {
                    breweries: null,
                    error: 'Error, please try again'
                });
                console.log('error', err);
            } else {
                let data = JSON.parse(body);
                let breweries = data.response;
                if (data.meta.code !== 200) {
                    res.render('index', {
                        breweries: null,
                        error: `Error, please try again: ${
                            data.meta.error_detail
                        }`
                    });
                    console.log('error', err);
                } else {
                    res.render('index', {
                        breweries: breweries.brewery.items,
                        error: null
                    });
                }
            }
        });
    }
});

// render our brewery page
app.get('/brewery/:id', function(req, res) {
    let breweryId = req.params.id;
    let url = `https://api.untappd.com/v4/brewery/info/${breweryId}?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}`;

    request(url, function(err, response, body) {
        if (err) {
            res.render('brewery', {
                breweries: null,
                error: 'Error, please try again'
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let brewery = data.response.brewery;
            if (data.meta.code !== 200) {
                res.render('brewery', {
                    brewery: null,
                    error: `Error, please try again: ${data.meta.error_detail}`
                });
                console.log('error', err);
            } else {
                res.render('brewery', {
                    brewery: brewery,
                    beers: brewery.beer_list.items,
                    error: null
                });
            }
        }
    });
});

// render our brewery page
app.get('/beer/:id', function(req, res) {
    let beerId = req.params.id;
    let url = `https://api.untappd.com/v4/beer/info/${beerId}?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}`;

    request(url, function(err, response, body) {
        if (err) {
            res.render('beer', {
                beer: null,
                error: 'Error, please try again'
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let beer = data.response.beer;
            if (data.meta.code !== 200) {
                res.render('beer', {
                    beer: null,
                    error: `Error, please try again: ${data.meta.error_detail}`
                });
                console.log('error', err);
            } else {
                console.log('beer :', beer);
                res.render('beer', {
                    beer: beer,
                    error: null
                });
            }
        }
    });
});
