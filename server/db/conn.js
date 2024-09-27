const mysql = require("mysql2");

const conn = mysql.createConnection({
    user:"ali",
    host:"mysql",
    password:"root",
    database:"crudmysql"
});


conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});


module.exports = conn;