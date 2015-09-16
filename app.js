var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var mongojs = require('mongojs');
var db = mongojs('garden', ['plants'])

app.use("/", express.static(path.join(__dirname + "/public")));

// connect to our database using the DB server URL.
// mongoose.connect('mongodb://localhost/garden');



app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.get("/plants", function(req,res){
 db.plants.find({}, function(err, plants){
   if(err) return;
   var response = plants;
   res.json(response);
 });
});


// app.get('*', function(req, res) {
//             res.sendfile('./public/views/index.html'); // load our public/index.html file
//         });

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function() {
  console.log("Listening on port 4000");
});
