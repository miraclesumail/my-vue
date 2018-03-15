var express = require('express');
var app = express();
var ItemRoutes = express.Router();
var config = require('./config')

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//     else  next();
// });

// Defined store route
ItemRoutes.route('/add').post(function (req, res) {
    console.log('ggg')
    console.log(req.body)
    config.connection.query("insert into items(name,price) values('得到的',888)",function (err, result, fields) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
    
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log(fields);
       console.log('------------------------------------------------------------\n\n');  
       res.send(result);
    });
});

// Defined get data(index or listing) route
ItemRoutes.route('/').get(function (req, res) {
   
    config.connection.query("select * from items",function (err, result, fields) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
       
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log(fields);
       console.log('------------------------------------------------------------\n\n');  
       res.send(result);
    });
});

// Defined edit route
ItemRoutes.route('/edit/:id').get(function (req, res) {

});

//  Defined update route
ItemRoutes.route('/update/:id').post(function (req, res) {
    console.log('veege')
});

// Defined delete | remove | destroy route
ItemRoutes.route('/delete/:id').get(function (req, res) {
 
});

module.exports = ItemRoutes;
