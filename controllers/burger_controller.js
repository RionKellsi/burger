var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(data){
        var bgrObject = {
            burgers: data
        };
        console.log(bgrObject);
        res.render("index", bgrObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.create("burger_name", req.body.name, function(result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id")