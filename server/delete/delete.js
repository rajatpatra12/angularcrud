//import express
var express = require("express");
//create the Router Instance
var router = express.Router();
//import the mongodb
var mongodb = require("mongodb");
//create the MongoClient
var app = mongodb.MongoClient;
//create the Post Request
router.post("/",function(req,res){
    var p_id = req.body.p_id;
    var obj = {"p_id":p_id};
    app.connect("mongodb://localhost:27017/ng4pm",
                            function(err,db){
        db.collection("products").deleteOne(obj,
                        function(err,result){
            if(err){
                res.send({"delete":"fail"});
            }else{
                res.send({"delete":"success"});
            }
        });
    });
});
//export the Router
module.exports = router;