const express = require('express');
const router = express.Router();
const request = require('request');

// render our brewery page
router.get(/beers/, function(req, res) {
    let breweryName = req.query.name;
    let url = `https://api.untappd.com/v4/search/beer?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&q=${breweryName}&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}`;

    request(url, function(err, response, body) {
        if (err) {
            res.render('beer-search', {
                beers: null,
                error: 'Error, please try again'
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let beers = data.response.beers;
            if (data.meta.code !== 200) {
                res.render('beer-search', {
                    beers: null,
                    error: `Error, please try again: ${data.meta.error_detail}`
                });
                console.log('error', err);
            } else {
                console.log('beers: ', beers);

                res.render('beer-search', {
                    beers: beers.items,
                    error: null
                });
            }
        }
    });
});

module.exports = router;
