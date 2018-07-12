var mysql = require('mysql2');
var dbase = require('./index');
var pool = mysql.createPool(dbase.dbConfig);

module.exports = {
    pool,
    dbase
} 