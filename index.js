var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
//var db = mongojs('customerapp', ['users']);
mongoose.connect('mongodb://localhost/customerapp');
let db = mongoose.connection;

//config file
//var config = require('config');

//check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
})

//Check for DB errors
db.on('error', function(err){
  console.log(err);
});

//Init App
var app = express();

//Bring in Models
let User = require('./models/user');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'dist')));

//Global Vars
app.use(function(req, res, next) {
  res.locals.errors = null;
  next();
});

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

//Home route
app.get('/', function(req, res){
  User.find({}, function(err, users){
    if(err){
      console.log(err);
    } else {
      res.render('index', {
        // title: 'Customers',
        users: users
      });
    }
  });
  //db.users.find(function (err, docs) {
    //array of all documents in the collection
    // console.log(docs);
//  })
});

// app.get('/about', function(req, res, next) {
//   res.render('./dist/about.html');
// });

//Add Submit POST route
app.post('/', function(req, res){

  // req.checkBody('full_name', 'Full Name is Required').notEmpty();
  // req.checkBody('email', 'Email is Required').notEmpty();
  // req.checkBody('query', 'A Message is Required').notEmpty();
  //
  // var errors = req.validationErrors();
  //

  let user = new User();
  user.full_name = req.body.full_name;
  user.email = req.body.email;
  user.query = req.body.query;
  user.save(function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.redirect('/');
    }
  });

  // if(errors){
  //   console.log('errors');
  // } else {
  //     var newUser = {
  //       full_name: req.body.full_name,
  //       email: req.body.email,
  //       query: req.body.query
  //     }
  //     db.users.insert(newUser, function(err, result){
  //       if(err){
  //         console.log(err);
  //       }
  //       res.redirect('/');
  //     });
  // }

  // console.log(newUser);
  //console.log('Submitted');
});

app.listen(3000, function() {
  console.log('Server started on port 3000...');
});

exports.closeServer = function(){
  server.close();
};
