//import express
var express = require("express");
//create the Router Instance
var router = express.Router();
//import the mongodb
var mongodb = require("mongodb");
//create the Mongo Client
var app = mongodb.MongoClient;
//create the post request
router.post("/",function(req,res){
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;

    var old_obj = {"p_id":p_id};
    var new_obj = { $set:{"p_name":p_name,"p_cost":p_cost} };

    app.connect("mongodb://localhost:27017/ng4pm",
                    function(err,db){
        db.collection("products").updateOne(old_obj,new_obj,
                    function(err,result){
            if(err){
                res.send({'update':'fail'});
            }else{
                res.send({'update':'success'});
            }
        });
    });
});

module.exports = router;