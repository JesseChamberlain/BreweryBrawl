const express = require('express');
const router = express.Router();
const request = require('request');

// render our brewery page
router.get('/beer/:slug', function(req, res) {
    let beerId = req.query.id;
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

module.exports = router;
