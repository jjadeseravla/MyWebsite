var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'dist')));

//Express Validator Middleware (sets up error formatter etc)
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg : msg,
      value : value
    };
  }
}));

// app.get('/', function(req, res){
//   res.send('Hello World');
// });

// app.get('/about', function(req, res, next) {
//   res.render('./dist/about.html');
// });

app.post('/users/add', function(req, res){

  req.checkBody('full_name', 'Full Name is Required').notEmpty();
  req.checkBody('email', 'Email is Required').notEmpty();
  req.checkBody('Query', 'A Message is Required').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    console.log('ERRORSSSS');
  } else {
      var newUser = {
        full_name: req.body.full_name,
        email: req.body.email,
        query: req.body.query
      }
      console.log('Success!!');
  }

  console.log(newUser);
});

app.listen(3000, function() {
  console.log('Server started on port 3000...');
});
