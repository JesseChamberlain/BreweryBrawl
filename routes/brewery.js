const express = require('express');
const router = express.Router();
const request = require('request');

// render our brewery page
router.post('/brewery/:url', function(req, res) {
    let query = req.body.query;
    console.log(query);
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

module.exports = router;
