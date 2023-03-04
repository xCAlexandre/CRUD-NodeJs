const mysql = require('mysql2/promise');
require('dotenv').config(); //configure env variables


const infoConnection = process.env;


// connection to database
const connection = mysql.createPool({
    host: infoConnection.MYSQL_HOST,
    user: infoConnection.MYSQL_USER,
    password: infoConnection.MYSQL_PASSWORD,
    database: infoConnection.MYSQL_DB,
});

module.exports = connection;