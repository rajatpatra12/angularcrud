//import the express
var express = require("express");

//create the router instance
var router = express.Router();

//import the mongodb
var mongodb = require("mongodb");


//create the mongo client
var app = mongodb.MongoClient;


//create the post request
router.post("/",function(req,res){
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    var obj = {'p_id':p_id,'p_name':p_name,'p_cost':p_cost};
    app.connect("mongodb://localhost:27017/ng4pm",
                     function(err,db){
        db.collection("products").insertOne(obj,
                                        function(err,result){
            if(err){
                res.send({insert:"fail"});
            }else{
                res.send({insert:"success"});
            }
        });
    });
});

//export the router
module.exports = router;




