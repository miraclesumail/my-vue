let mysql = require('mysql')

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '123456',
    database : 'laravel'
  }); 

connection.connect();  

connection.query("select * from items",function (err, result, fields) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }

   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log(fields);
   console.log('------------------------------------------------------------\n\n');  
});

