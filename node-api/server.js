var express = require('express');
var cors = require('cors')
var userRoutes = require('./routes/user-route');

var app = express();

app.use(cors());        // Allow all origin for now

var port = 8080;        // Set our port

app.use('/user', userRoutes);

// Start the server
app.listen(port);
console.log('Server is running on: ' + port);