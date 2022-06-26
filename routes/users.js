var express = require('express');
var router = express.Router();
var UsersModel = require('../model/UserModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
 UsersModel.find((err,doc)=>{
      if(err){
          console.log(err);
      }else{
          if(doc!==null){
              console.log(JSON.stringify({"users":doc}))
              res.send(JSON.stringify({"users":doc}))
          }
      }
  })
});
router.get('/wuhongru',(req,res,next)=>{
  res.send("我是吴鸿儒");
})
router.get('/login',(req,res,next)=>{
  var u = req.query.username;
  var p = req.query.password;
  console.log(u+p);
  UsersModel.findOne({username:u},{password:1,_id:1},(err,docs)=>{
    if(err){
        console.log("出错");
    }else{
      //返回id
      if(docs===null){
        res.send("error")
      }else if(docs.password===p){
          res.send(docs._id)
        }else{
          res.send("error")
        }
    }
  })
})
router.get('/sign',(req,res,next)=>{
  UsersModel.findOne({username:req.query.username},{_id:1},(err,docs)=>{
    if(err){
        console.log(err)
    }else{
        if(docs===null){
          UsersModel.create({username:req.query.username,password:req.query.password})
          res.send("ok")
        }else{
          res.send("error")
        }
        
    }
  })
})

router.get('/deleteOne',(req,res,next)=>{
  var u = req.query.username
  var a = req.query.adminname
  if(a==="xiaominwei"&&u!==null){
    UsersModel.findOneAndDelete({username:u},(err,docs)=>{
        if(err){
          console.log(err)
        }else{
          if(docs===null){
            res.send("not exist")
          }else{
            res.send(docs.username)
          }
        }
    })
  }else{
    res.send("不合法")
  }
  
})






module.exports = router;
