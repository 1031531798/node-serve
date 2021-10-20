var express = require('express');
var router = express.Router();
var fs = require('fs');
let imagePath = process.cwd() + '/public/images/';
var { useMysql } = require('../utils/mysql.js')
    /* GET home page. */
router.get('/list', function(req, res, next) {
    var files = fs.readdirSync(imagePath);
    console.error(files)
    fs.readdir('../public/images/', (err, files) => {
        res.send(files);
    })
})

module.exports = router;