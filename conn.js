var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "faizah",
    password: "faizah",
    database: "nodejs"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;