var express = require('express');
var router = express.Router();
var ChargesModel = require('../model/ChargeModel')

router.get('/', function(req, res, next) {
    ChargesModel.find((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            if(doc!==null){
                console.log(JSON.stringify({"places":doc}))
                res.send(JSON.stringify({"places":doc}))
            }
        }
    })
  });



module.exports=router