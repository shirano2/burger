/* controller */
var express=require("express");
var router = express.Router();
var burger=require("../models/burger.js");

/* route for menu screen (after cooking, after eating) */
router.get("/",function(req,res){
    burger.menu(function(data){
        res.render("index",{burgers:data});
    });
});

/* route for cooking (when getting the order from form) */
router.post("/api/burgers", function(req, res) {
    burger.cooking(req.body.burger_name, function(data){
        res.json({ id: data.insertId });
    });
});

/* route for eating (after clicking the Devour button) */
router.put("/api/burgers/:id", function(req, res) {
    burger.eating(req.params.id, function(data){
        if (data.changedRows === 0) {
            return res.status(404).end();
        }
      res.status(200).end();
    });
});

module.exports=router;