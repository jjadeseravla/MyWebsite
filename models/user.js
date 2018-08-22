let mongoose = require('mongoose');

//User Schema

let userSchema = mongoose.Schema({
  full_name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  query:{
    type: String,
    required: true
  }
});

let User = module.exports = mongoose.model('User', userSchema);
