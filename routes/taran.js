const express = require('express');
const router = express.Router();
const request = require('request');

// render our taran page
router.get('/taran', function(req, res) {
    res.render('taran', { search: false });
});

module.exports = router;
