/* orm */
var connection=require("./connection.js");

var orm={
    /* get the whole data in table */
    selectAll:function(tableName, cb){
        connection.query("SELECT * from ??",[tableName],function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
    /* add one row in table */
    insertOne:function(tableName, burger_name_col, burger_name, cb){
        connection.query("INSERT INTO ?? (??) VALUES (?)",[tableName, burger_name_col, burger_name],function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
    /* modify one row in table */
    updateOne:function(tableName, devoured, id_col, id, cb){
        connection.query("UPDATE ?? SET ? WHERE ??=?",[tableName, devoured, id_col, id],function(err,data){
            if(err) throw err;
            cb(data);
        })
    }
}

module.exports=orm;
