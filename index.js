var express=require('express');
var app=express();

var port=process.env.PORT||7000;

var mongoose= require('mongoose');
var Movie=require('./api/models/movieModel');
var bodyParser =require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Moviedb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes=require('./api/routes/movieRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('movie RESTful API server started on : '+port);