var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    var info = {
        brgr: []
    };

    burger.selectAll(function(data){
        for(var i=0; i<data.length; i++){
            info.brgr.push(data[i]);
        }
        res.render("index", info)
    });
});

router.post("/create", function(req,res){
    burger.insertOne([req.body.burgerInput], function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
        res.redirect('/');
    });
});

router.put("/update/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne(req.body.devoured, condition, function(){
        console.log("Update Sent!")
        res.redirect('/');
    })
 });

module.exports = router;