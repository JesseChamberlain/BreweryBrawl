const express = require('express');
const router = express.Router();
const request = require('request');
const fs = require('fs');

// render our brewery page
router.get('/brewery/:url', function(req, res) {
    let queryId = req.query.id;
    let url = `https://api.untappd.com/v4/brewery/info/${queryId}?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}`;
    var templates = {
        activityFeed: fs.readFileSync('./views/activity-feed.ejs', 'utf-8')
    };

    request(url, function(err, response, body) {
        if (err) {
            res.render('brewery', {
                breweries: null,
                error: 'Error, please try again',
                templates: templates
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let brewery = data.response.brewery;
            if (data.meta.code !== 200) {
                res.render('brewery', {
                    brewery: null,
                    error: `Error, please try again: ${data.meta.error_detail}`,
                    templates: templates
                });
                console.log('error', err);
            } else {
                res.render('brewery', {
                    brewery: brewery,
                    beers: brewery.beer_list.items,
                    error: null,
                    templates: templates
                });
            }
        }
    });
});

module.exports = router;
