const express = require('express');
const app = express();
const db = require('./db.js');

app.get('/cities', function(req, res){
    db.getCitiesInCountry('GBR', function(rows){
        cities = rows;
    });
    res.send(cities);
    console.log('Request processed: ');
});

app.listen(8002, function() {
    console.log('World API listening on port 8002..');
});