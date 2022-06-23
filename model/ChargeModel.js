var mongoose =require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Charges');

var ChargeSchema = new mongoose.Schema({
    latitude:{type:String},
    longitude:{type:String},
    status:{type:String},
    maxpower:{type:String},
    price:{type:String},
  });
  var ChargeModel = mongoose.model("mycharges",ChargeSchema,"mycharges");

  module.exports = ChargeModel