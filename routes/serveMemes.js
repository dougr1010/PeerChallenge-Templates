/**
 * Created by dougritzinger on 10/6/15.
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var jsonquery = require('json-query');
var pictures = require('../models/data.json');


/* GET users listing. */
//router.get('/', function(req, res, next) {
//    res.send('respond with a resource');
//});


// main jade page
router.get('/', function(req, res, next) {
    console.log('hit /main jade page endpoint');
    res.render('memes',{title: "Memes", memes:pictures });
});

/* Get the JSON data */

router.get('/json', function(req, res, next){
    res.send(pictures);
});

//function getJsonQueryString(key, value){
//    var queryString = '[' + key + '=' + value + ']';
//    //console.log('Generate query string: ' + queryString);
//    return queryString;
//}







//var memes =["/images/cat.jpg"]



module.exports = router;
