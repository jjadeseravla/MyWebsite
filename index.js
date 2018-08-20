var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var router = express.Router();

var app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/about', function(req, res, next) {
  res.render('./dist/about.html');
})

app.listen(3000, function() {
  console.log('Server started on port 3000...');
});
