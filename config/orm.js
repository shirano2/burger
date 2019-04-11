var connection=require("./connection.js");
  
/* make object to "key='value'" string */
function objToSql(obj) {
    var arr = [];
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
        if (typeof value === "string") {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

/* orm */
var orm={
    /* get the whole data in table */
    selectAll:function(tableName, cb){
        connection.query("SELECT * from ??",[tableName],function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
    /* add one row in table */
    insertOne:function(tableName, obj, cb){
        var query="INSERT INTO "+tableName+" SET "+objToSql(obj);
        connection.query(query,function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
    /* modify one row in table */
    updateOne:function(tableName, obj, id, cb){
        var query="UPDATE "+tableName+" SET "+objToSql(obj)+" WHERE "+objToSql(id);
        connection.query(query,function(err,data){
            if(err) throw err;
            cb(data);
        })
    }
}

module.exports=orm;