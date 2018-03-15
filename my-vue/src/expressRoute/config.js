let mysql = require('mysql')

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'laravel'
});

module.exports ={
    connection
}

