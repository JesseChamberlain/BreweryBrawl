const express = require('express');
const router = express.Router();
const request = require('request');

// render our brewery search page
router.get('/brewery-search', function(req, res) {
    res.render('brewery-search', { breweries: null, error: null });
});

// render our beer search page
router.get('/beer-search', function(req, res) {
    res.render('beer-search', { beers: null, error: null });
});

// call Untappd API and render index page
router.post('/brewery-search', function(req, res) {
    let query = req.body.query;
    let url = `https://api.untappd.com/v4/search/brewery?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}&q=${query}&limit=50`;

    request(url, function(err, response, body) {
        if (err) {
            res.render('brewery-search', {
                breweries: null,
                error: 'Error, please try again'
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let breweries = data.response;
            if (data.meta.code !== 200) {
                res.render('brewery-search', {
                    breweries: null,
                    error: `Error, please try again: ${data.meta.error_detail}`
                });
                console.log('error', err);
            } else {
                res.render('brewery-search', {
                    breweries: breweries.brewery.items,
                    error: null
                });
            }
        }
    });
});

// call Untappd API and render index page
router.post('/beer-search', function(req, res) {
    let query = req.body.query;
    let url = `https://api.untappd.com/v4/search/beer?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}&q=${query}&limit=50`;

    request(url, function(err, response, body) {
        if (err) {
            res.render('beer-search', {
                beers: null,
                error: 'Error, please try again'
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let beers = data.response;

            if (data.meta.code !== 200) {
                res.render('beer-search', {
                    beers: null,
                    error: `Error, please try again: ${data.meta.error_detail}`
                });
                console.log('error', err);
            } else {
                res.render('beer-search', {
                    beers: beers.beers.items,
                    error: null
                });
            }
        }
    });
});

module.exports = router;
