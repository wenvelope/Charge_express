var express = require('express');
var router = express.Router();
var ChargesModel = require('../model/ChargeModel')
var FormModel = require('../model/FormsModel')

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

  router.get('/forms',function(req,res,next){
    var token = req.query.token
    FormModel.find({token:token},(err,doc)=>{
        if(err){
            console.log(err)
        }else{
            if(doc!==null){
                console.log(token)
                console.log(JSON.stringify({"forms":doc}))
                res.send(JSON.stringify({"forms":doc}))
            }
        }
    })
  })

  router.get('/postForms',function(req,res,next){
    var token = req.query.token
    var start= req.query.start
    var consume = req.query.consume 
    if(token!==null&&start!==null&&consume!==null){
        FormModel.create({token,start,consume})
        res.send("ok")
    }else{
        res.send("error")
    }
  })




  



module.exports=router