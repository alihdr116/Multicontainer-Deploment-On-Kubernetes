const mysql = require("mysql2");

const conn = mysql.createConnection({
    user:"ali",
    host:"localhost",
    password:"root",
    database:"crudmysql"
});


conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});


module.exports = conn;