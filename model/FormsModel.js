var mongoose =require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Charges');

var FormSchema = new mongoose.Schema({
    token:{type:String},
    start:{type:String},
    consume:{type:String},
  });
  var FormModel = mongoose.model("myform",FormSchema,"myforms");

  module.exports = FormModel