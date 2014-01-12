var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	console.log("My app is running!");

	app.get("/hello", function (req, resp) {
		resp.write("HELLO WORLD! My name is Kevin!");
		resp.end();
	});


	app.get("/html", function (req, resp) {
		resp.write("<html><body><h1>Woo! Node is cool!</h1><button>Click me</button></body></html>");
		resp.end();
	});

	app.get("/template/:name/:food/", function (req, resp) {
		resp.render("template", { name: req.params.name, food: req.params.food });
	});

	app.get("/", function (req, resp) {
		
		db.findArray({}, function(arr) {
			resp.render("index", { locations: arr });
		});

		
	});

	app.get("/rating/:rating", function (req, resp) {
		var rating = parseInt(req.params.rating);
		db.findArray({ rating: rating }, function(arr) {
			resp.render("index", { locations: arr });
		});

		
	});





})