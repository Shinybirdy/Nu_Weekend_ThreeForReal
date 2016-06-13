var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var index = require ('./routes/index');
var calculate = require('./routes/calculate');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended :true}));
app.use ('/calculator', calculate);
app.use('/', index);

app.listen(app.get('port'), function(){
    console.log('Server is up and running' + app.get('port'));
});
