var xpath = require('xpath');
var express = require('express');

var app = express();

app.get('/xpath', function (req, res) {
    var expr = xpath.parse("//persons/user[name/text()='" + req.param("name") + "']/details/text()");
    expr = xpath.parse("//persons/user[name/text()='" + req.param.name + "']/details/text()");
    expr = xpath.parse("//persons/user[name/text()='" + req["name"] + "']/details/text()");
    expr = xpath.parse("//persons/user[name/text()='" + req.param + "']/details/text()");
    //do not match
    expr = JSON.parse("{'foo':" + req.param + "}");
    res.redirect('/home')
});
