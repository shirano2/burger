# Burger

This app is simple. 

If you want to eat a burger, then click the "Devour it!!" button 

If you don't like the menu of the burger, then you can order a new burger to write burger's name in order form.

I hope you help yourself!!


## Site
https://burger-52408.herokuapp.com/


### Technologies Used

* HTML5
* CSS3
* JQuery
* Javascript
* MySQL
* Node.js (Express, Express-handlebars)


### DB Model

```
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);
```

### ORM 

#### Menu

```
selectAll:function(tableName, cb){
    connection.query("SELECT * from ??",[tableName],function(err,data){
        if(err) throw err;
        cb(data);
    })
}
```

#### Order

```
insertOne:function(tableName, obj, cb){
    var query="INSERT INTO "+tableName+" SET "+objToSql(obj);
    connection.query(query,function(err,data){
        if(err) throw err;
        cb(data);
    })
}
```

#### Eat

```
updateOne:function(tableName, obj, id, cb){
    var query="UPDATE "+tableName+" SET "+objToSql(obj)+" WHERE "+objToSql(id);
    connection.query(query,function(err,data){
        if(err) throw err;
        cb(data);
    })
}
```


### Creator
This is made by Minseok Choi (https://github.com/shirano2)




