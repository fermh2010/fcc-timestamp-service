'use strict';

const express = require('express');
const app = express();

app.get('/:time', function(req, res, next) {
    const raw_time = req.params.time;
    var date;
    const unix_time = parseInt(raw_time);
    if(isNaN(unix_time)) {
        date = new Date(raw_time);
    } else {
        date = new Date(unix_time);
    }
    
    var out = {};
    if(isNaN(date.getTime())) {
        out.unix = null;
        out.natural = null;
    } else {
        out.unix = date.getTime();
        out.natural = date.toUTCString();
    }
    
    res.json(out);
});

app.listen(8080);