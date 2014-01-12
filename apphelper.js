exports.runApp = function(callback) {
	
	var express = require("express");
	var http = require("http");
	var mongo = require("mongodb");
	var path = require("path");
	var MONGO_URI = "mongodb://pfnp:pfnp@ds051368.mongolab.com:51368/pfnp";
	var DB  = null;

	mongo.MongoClient.connect(MONGO_URI, function(err, db) {
		if (err) { //if there is an error
	  		console.log("Error connecting to mongo! " + err);
	  		process.exit(1);
	  	}

		var places =  db.collection("places")
		places.findArray = function(query, cb) {
	   		places.find(query).toArray(function(err, array) {
				if (err) {
					console.log("Error with findArray query: " + err);
				}
				else {
					cb(array);
				}
			});
	   }
		/** INITIALISE APPLICATION */
		var app = express();

		// all environments
		app.set("port", process.env.PORT || 3000);
		app.set("views", __dirname + "/views");
		app.set("view engine", "ejs");
		app.use(express.logger("dev"));
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(app.router);
		app.use(express.static(path.join(__dirname, "public")));


	   

	   	http.createServer(app).listen(app.get("port"), function(){
		  console.log("Express server listening on port " + app.get("port"));
		  console.log("To quit, press Ctrl+C");
		  callback(app, places);
		});
	});
}