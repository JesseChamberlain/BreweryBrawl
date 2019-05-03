const express = require('express');
const router = express.Router();
const request = require('request');

// render our brewery page
router.get('/api/activity-feed', function(req, res) {
    let breweryID = req.query.breweryID;
    let url = `https://api.untappd.com/v4/brewery/checkins/${breweryID}?client_id=${
        process.env.UNTAPPD_CLIENT_ID
    }&client_secret=${process.env.UNTAPPD_CLIENT_SECRET}`;

    request(url, function(err, response, body) {
        if (err) {
            res.send({
                activityFeed: null,
                error: 'Error, please try again'
            });
            console.log('error', err);
        } else {
            let data = JSON.parse(body);
            let activityFeed = data.response.checkins.items;
            if (data.meta.code !== 200) {
                res.send({
                    activityFeed: null,
                    error: err
                });
                console.log('error', err);
            } else {
                res.send({
                    activityFeed: activityFeed,
                    error: null
                });
            }
        }
    });
});

module.exports = router;
