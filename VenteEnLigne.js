var express = require('express');
var hhtp = require('http');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/newBase2';

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
					db.collection('Panier').remove({"id": search});
					var search = {};
					affichePanier(db,search, function(ProductSearch){
						res.setHeader('Access-Control-Allow-Origin','*');
						res.setHeader('Content-Type','application/json');
						var json = JSON.stringify(ProductSearch);
						res.end(json);
						},res)

};

var ajoutPanier = function (db,search,callback, res){
					var cursor = db.collection('Panier').find(search);
					var cursor2 = db.collection('Produits').find(search);			
					var resultat = [];
					var resultat2 = [];
					cursor.each(function(err,doc){
						assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
						}
						
					});
					cursor2.each(function(err,doc){
						assert.equal(null,err);
						if (doc != null){
							resultat2.push(doc);							
						}
						else {
							if (resultat.length > 0)
							{
							db.collection('Panier').update(search,{$set : {"quantite": resultat[0].quantite+1}});
							}
							else 
							{
							db.collection('Panier').insert(resultat2[0]);
							db.collection('Panier').update(search,{$set : {"quantite": 1}});
							}
						}									
					});	
					
};

MongoClient.connect(url,function(err,db){

	assert.equal(null,err);

  app.get('/products/paramRecherche/',function(req,res){
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

app.get('/products/produits/:nom/:marque/:type/:prixmin/:prixmax/',function(req,res){
	var nomAChercher = req.params.nom;
	var marqueAChercher = req.params.marque;
        var typeAChercher = req.params.type;
	var prixMin = parseInt(req.params.prixmin);
	var prixMax = parseInt(req.params.prixmax);
  	console.log("serveur node : /products/produits/"+nomAChercher+"/"+marqueAChercher+"/"+typeAChercher+"/"+prixMin+"/"+prixMax);
	var param = []; 
	if (nomAChercher != "undefined") {
		param.push({ "nom" : {'$regex': nomAChercher }});
	}
        if (marqueAChercher != "undefined"){
		param.push({ "marque" : marqueAChercher });
	}
        if (typeAChercher != "undefined"){
		param.push({ "type" : typeAChercher });
	}
	if (req.params.prixmin != "undefined" && req.params.prixmax != "undefined"){
		console.log("2 defini");
		param.push({"price": {'$gte': prixMin, '$lte': prixMax}});
	}
	if (req.params.prixmin != "undefined" && req.params.prixmax == "undefined"){
		console.log("prix min def");
		param.push({ "price" :  {'$gte' : prixMin} });
	}
	if (req.params.prixmax != "undefined" && req.params.prixmin == "undefined"){
		console.log("prix max def");
		param.push({ "price" : {'$lte' : prixMax} });
	}
	var search;
	if (param.length > 0)
	{
	search = { $and: param }
	}
	else {
	search = {}
	}
	console.log(search);
	findProducts(db,search, function(ProductSearch){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Content-Type','application/json');
		var json = JSON.stringify(ProductSearch);
		res.end(json);
}, res)
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

	app.get('/products/ajout/:id',function(req,res){
	console.log("debut appget");
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
