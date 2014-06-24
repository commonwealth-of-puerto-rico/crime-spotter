var express = require('express');
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

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

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});