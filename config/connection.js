//Set up MySQL connection. 
var mysql = require("mysql");
var connection = mysql.createConnection({
        host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "f153e93psseswcrk",
        password: "xinrubjboiimhcue",
        database: "z3imhl2y1hhrnlrx"
    });


//Make the connection. 
connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export connection for the ORM to use
module.exports = connection;