//Set up MySQL connection. 
var mysql = require("mysql");
var connection;


if ( process.env.JAWSDB_URL ){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Rylee2016!",
        database: "burgers_db"
    });
}

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