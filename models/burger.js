/* burger links to the orm */
var orm=require("../config/orm.js");

var burger={
    /* show all burgers --> select sql */
    menu:function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    /* get order and make a new burger --> insert sql */
    cooking:function(obj,cb){
        orm.insertOne("burgers",obj, function(res){
            cb(res);
        });
    },
    /* eat burger (devoured status is changed) --> update sql */
    eating:function(obj,id,cb){
        orm.updateOne("burgers",obj,id,function(res){
            cb(res);
        })
    }
};

module.exports=burger;