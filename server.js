var express = require('express');
var port = process.env.PORT || 3000;
var app = express();


app.use(express.static(__dirname + '/build'));

var contactRoutes = express.Router();
require('./routes/contact_routes.js')(contactRoutes);
app.use('/api', contactRoutes);


app.listen(port, function() {
  console.log('Server running on port: ' + port);
});
