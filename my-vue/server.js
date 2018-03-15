const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mysql = require('mysql'),
config = require('./src/expressRoute/config'),
itemRoutes = require('./src/expressRoute/item');


mysql.Promise = global.Promise;
config.connection.connect((err, res) => {
    if(err){
        console.log(err)
    }else{
        console.log('Database is connected') 
    }
})

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use('/items', itemRoutes);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});