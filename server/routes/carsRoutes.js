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

router.post('/', function(req, res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if (errorConnectingToDatabase) {
            console.log('error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`INSERT INTO cars (year, model, nickname, company_id) 
            VALUES ($1, $2, $3, $4);`, [req.body.year, req.body.model, req.body.nickname, req.body.company_id], function(errorMakingQuery, result){
                done();
                if (errorMakingQuery) {
                    console.log('error making query', errorMakingQuery);
                    res.send(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});//

module.exports = router;