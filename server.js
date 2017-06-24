var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var http = require('http');

app.set('views',__dirname+'/public');

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/public',express.static(__dirname+'/public'));

app.set('port', (process.env.PORT || 3000));


app.get('*',function(req,res){
   res.render('index.html');
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});