var express = require('express');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/dist'));


// start server on the specified port and binding host
app.listen(8000, function() {
  console.log("server starting on " + 'port 8000');
});


