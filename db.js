const mysql = require('mysql2');


const dbconn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'cafereservation',
}); 

dbconn.connect((err) =>{
    if (err) {
        console.log('Error DB is NOT connected :' , err.message);
        return
    }
    console.log('connected to mysql database');

});

module.exports = dbconn;