var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen('6969', (err, success) => {
    console.log('server is running at 6969');
})