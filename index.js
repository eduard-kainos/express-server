const express = require('express')
const app = express();

cities = [
    {
        id: 469,
        name: 'Belfast',
        countrycode: 'GBR',
        district: 'Northern Ireland',
        population: 200000
    },
    {
        id: 1447,
        name: 'Dublin',
        countrycode: 'IRL',
        district: 'Leinster',
        population: 481002
    }
];

app.get('/cities', function(req, res){
    res.send(cities);
    console.log('Request processed');
});

app.listen(8002, function() {
    console.log('World API listening on port 8002..');
});