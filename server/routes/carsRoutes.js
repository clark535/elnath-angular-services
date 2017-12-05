var express = require('express');
var router = express.Router();
var pg = require('pg');

var pool = require('../modules/pool');

router.get('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT company.id, cars.year, company.name, cars.model,
            company.country, cars.nickname
            FROM company JOIN cars ON company.id=cars.company_id;`, function(errorMakingQuery, result){
                done();
                if(errorMakingQuery) {
                    console.log('error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            })
        }
    });
});//end get and display table on DOM

module.exports = router;