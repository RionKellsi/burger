//Import MySQL Connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM" + table;
        
        connection.query(queryString, function(err, data){
            if (err) throw err;
            callback(data);
        });
    },
    
    insertOne: function(table, column, burgerInput, callback){
        var queryString = 'INSERT INTO' + table + '(' + column + ') VALUES (?)';
        connection.query(queryString, [burgerInput], function(err, data){
            if (err) throw err;
            callback(data);
        });
    },

    updateOne: function(table, col, colVal, condition, conditionVal, callback){
        var queryString = 'UPDATE' + table + 'SET' + col + '=?' + 'WHERE' + condition + '=?';
        connection.query(queryString, [colVal, conditionVal] function(err,data){
            if (err) throw err;
            callback(data);
        }) 
    }

};

module.exports = orm;
