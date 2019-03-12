const express = require('express');
const router = express.Router();
const request = require('request');

// render our index page
router.get('/', function(req, res) {
    res.render('index', { breweries: null, error: null });
});

// call Untappd API and render index page
router.post('/', function(req, res) {
    let query = req.body.query;
    let url = `https://api.untappd.com/v4/search/brewery?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}&q=${query}`;

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
                    error: `Error, please try again: ${data.meta.error_detail}`
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
});

module.exports = router;
