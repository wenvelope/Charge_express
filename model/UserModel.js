var mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users');
var UserSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String}
  });
  var UsersModel = mongoose.model("myusers",UserSchema);

  module.exports = UsersModel