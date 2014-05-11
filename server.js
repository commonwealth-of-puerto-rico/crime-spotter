var express = require('express');
var app = express();

// Configuration
app.configure(function() {
    // Static files directory
    app.use(express.static(__dirname + '/public'));
    // Show log for all requests in console	
    app.use(express.logger('dev'));				
});

// Load index page
app.get('*', function(req, res) {						
    res.sendfile('./public/index.html');				
});

// Listen to port 8080 and run the server
app.listen(8080, function() {
    console.log('App listening on port 8080');
});