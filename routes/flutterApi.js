var express = require('express');
var router = express.Router();
var fs = require('fs');
const {
    typeList,
    recommendGoods,
} = require('../graphql/data')

var { message } = require('../graphql/date.json');
router.get('/typeList', function(req, res, next) {
    res.json(typeList)
})
router.get('/recommendGoods', function(req, res, next) {
    res.json(
        recommendGoods
    )
})
router.post('/message/list', function(req, res, next) {
    res.json(
        message
    )
})

module.exports = router;