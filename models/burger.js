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
    cooking:function(burger_name,cb){
        orm.insertOne("burgers",{burger_name:burger_name, devoured:false}, function(res){
            cb(res);
        });
    },
    /* eat burger (devoured status is changed) --> update sql */
    eating:function(id,cb){
        orm.updateOne("burgers",{devoured:true},{id:id},function(res){
            cb(res);
        })
    }
};

module.exports=burger;