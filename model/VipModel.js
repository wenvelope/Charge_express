var mongoose =require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Charges');

var VipSchema = new mongoose.Schema({
    token:{type:String},
    time:{type:String},
  });
  var VipModel = mongoose.model("vip",VipSchema,"vips");

  module.exports = VipModel