var express = require('express');
var hhtp = require('http');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/newBase2';

/*var cors = require('cors');
app.use(cors);*/


var findProducts = function (db,search,callback){
					var cursor = db.collection('Produits').find(search);
					var resultat = [];
					cursor.each(function(err,doc){
				        	assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
							for (var p in doc){
							console.log(p+"   :    "+doc[p]);
							}
						}

						else {
						callback(resultat);}
						console.log("\n");
					});
};

var affichePanier = function (db,search,callback, res){
					var cursor = db.collection('Panier').find(search);
					var resultat = [];
					cursor.each(function(err,doc){
				        	assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
							for (var p in doc){
							console.log(p+"   :    "+doc[p]);
							}
						}
						else {
							callback(resultat);}
						console.log("\n");
					});
};

var retirePanier = function (db,search,callback, res){
					console.log(search);
					var cursor = db.collection('Panier').remove({"id": search});
					var search = {};
					affichePanier(db,search, function(ProductSearch){
						res.setHeader('Access-Control-Allow-Origin','*');
						res.setHeader('Content-Type','application/json');
						var json = JSON.stringify(ProductSearch);
						res.end(json);
						},res)


};


var ajoutPanier = function (db,search,callback, res){
					var cursor = db.collection('Produits').find(search);
					var resultat = [];
					cursor.each(function(err,doc){
				        	assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
							for (var p in doc){
							console.log(p+"   :    "+doc[p]);
							}
						}

						else {

						db.collection('Panier').insert(resultat[0]);

						var search={};
						affichePanier(db,search, function(ProductSearch){
							res.setHeader('Access-Control-Allow-Origin','*');
							res.setHeader('Content-Type','application/json');
							var json = JSON.stringify(ProductSearch);
							res.end(json);
							},res)}

						console.log("\n");
					});
};





MongoClient.connect(url,function(err,db){

	assert.equal(null,err);

/*
 	app.use(function(req, res){
		res.header('Access-Control-Allow-Origin','*');
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
		next();
	})
*/

	app.get('/products/marque/:marque',function(req,res){
				var marqueAChercher = req.params.marque;
				console.log("serveur node : /products/marque/"+marqueAChercher);
				var search = {"marque" : marqueAChercher};
				findProducts(db,search, function(ProductSearch){
					res.setHeader('Access-Control-Allow-Origin','*');
					res.setHeader('Content-Type','application/json');
					var json = JSON.stringify(ProductSearch);
					res.end(json);
	  			})
		});


        app.get('/products/type/:type',function(req,res){
				var typeAChercher = req.params.type;
				console.log("serveur node : /products/type/"+typeAChercher);
				var search = {"type" : typeAChercher};
				findProducts(db,search, function(ProductSearch){
					res.setHeader('Access-Control-Allow-Origin','*');
					res.setHeader('Content-Type','application/json');
					var json = JSON.stringify(ProductSearch);
					res.end(json);
	  			})
		});
        app.get('/products/types/',function(req,res){
				var typesAChercher = req.params.type;
				console.log("serveur node : /products/types/");
				var search = {};
				findProducts(db,search, function(ProductSearch){
					res.setHeader('Access-Control-Allow-Origin','*');
					res.setHeader('Content-Type','application/json');
					var json = JSON.stringify(ProductSearch);
					res.end(json);
	  			})
		});
      app.get('/products/marques/',function(req,res){
				var marquesAChercher = req.params.type;
				console.log("serveur node : /products/marques/");
				var search = {};
				findProducts(db,search, function(ProductSearch){
					res.setHeader('Access-Control-Allow-Origin','*');
					res.setHeader('Content-Type','application/json');
					var json = JSON.stringify(ProductSearch);
					res.end(json);
	  			})
		});

  app.get('/panier/ids/',function(req,res){
			var produitsAafficher = req.params.type;
			console.log("serveur node : /panier/ids/");
			var search = {};
			affichePanier(db,search, function(ProductSearch){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('Content-Type','application/json');
				var json = JSON.stringify(ProductSearch);
				res.end(json);
  			},res)
	});

	app.get('/panier/retire/:id',function(req,res){
	var idAChercher = req.params.id;
	console.log("serveur node : /panier/id/"+idAChercher);
	var search = idAChercher;
	retirePanier(db,search, function(ProductSearch){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Content-Type','application/json');
		var json = JSON.stringify(ProductSearch);
		res.end(json);
	}, res)
});

	app.get('/panier/ajout/:id',function(req,res){
	var idAChercher = req.params.id;
  console.log("serveur node : /panier/id/"+idAChercher);
	var search = {"id" : idAChercher};
	ajoutPanier(db,search, function(ProductSearch){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Content-Type','application/json');
		var json = JSON.stringify(ProductSearch);
		res.end(json);
}, res)
});


});


app.listen(7040);
