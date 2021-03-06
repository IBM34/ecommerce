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
					console.log("Affichage des produits qui correspondent à la recherche");
					cursor.each(function(err,doc){
				        	assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
						}
						else {
						callback(resultat);}
						console.log("\n");
					});
};

var affichePanier = function (db,search,callback){
					var cursor = db.collection('Panier').find(search);
					var resultat = [];
					console.log("Affichage des produits du panier");
					cursor.each(function(err,doc){
				        	assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
						}
						else {
							callback(resultat);}
					});
					console.log("Les produits du panier ont été affiché");
					console.log("\n");
};

var retirePanier = function (db,search,callback, callback2){				
					res = db.collection('Panier').remove(search);	
					console.log(res);				
					console.log("le produit suivant a été supprimé");	
					console.log(search);
					console.log("\n");
					search = {};
					callback(db,search,callback2);

};

var ajoutPanier = function (db,search,callback, callback2){
					var cursor = db.collection('Panier').find(search);
					var cursor2 = db.collection('Produits').find(search);			
					var resultat = [];
					var resultat2 = [];
					console.log("Ajout du produit suivant dans le panier");
					console.log(search);
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
						        console.log("Le produit est deja présent dans le panier");
							console.log("Sa quantité est"+resultat[0].quantite);
							db.collection('Panier').update(search,{$set : {"quantite": resultat[0].quantite+1}});
							console.log("Sa quantité a été augmenté");
							console.log("\n");
							search = {};
							callback(db,search,callback2);
							}
							else 
							{
							console.log("Le produit n'est pas encore present dans le panier => insertion");
							db.collection('Panier').insert(resultat2[0]);
							db.collection('Panier').update(search,{$set : {"quantite": 1}});
							console.log("Insertion effectuée");
							console.log("\n");
							search = {};
							callback(db,search,callback2);
							}
						}									
					});						
};

var augmenterQuantite = function (db,search,callback, callback2){
					var cursor = db.collection('Panier').find(search);
					var resultat = [];
					console.log("Augmentation de la quantité du produit suivant :");
					console.log(search);
					cursor.each(function(err,doc){
						assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
						}
						else {
						var n=resultat[0].quantite+1;
						console.log("La quantité est:"+resultat[0].quantite+" et doit devenir :"+ n); 
						db.collection('Panier').update(search,{$set : {"quantite": resultat[0].quantite+1}});
						console.log(" La quantité a été augmenté");
						console.log("\n");
						search = {};
						callback(db,search,callback2);
						}						
					});					
					
};

var reduireQuantite = function (db,search, callback, callback2, callback3){
					var cursor = db.collection('Panier').find(search);
					var resultat = [];
					console.log("Reduction de la quantité du produit suivant :");
					console.log(search);
					cursor.each(function(err,doc){
						assert.equal(null,err);
						if (doc != null){
							resultat.push(doc);
						}
						else {
						if (resultat[0].quantite == 1)
						{
						callback2(db,search, callback, callback3);
						}
						else
						{
						var n=resultat[0].quantite-1;
						console.log("La quantité est:"+resultat[0].quantite+" et doit devenir :"+n); 
						db.collection('Panier').update(search,{$set : {"quantite": resultat[0].quantite-1}});
						console.log(" La quantité a été réduite");
						console.log("\n");
						search = {};	
						callback(db,search,callback3);
						}
						}						
					});
};

MongoClient.connect(url,function(err,db){

	assert.equal(null,err);

  app.get('/products/paramRecherche/',function(req,res){
				var marquesAChercher = req.params.type;
				console.log("app get : demande des parametre pour la recherche de produits");
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
  	console.log("app get : recherche de produit : " +nomAChercher+"/"+marqueAChercher+"/"+typeAChercher+"/"+prixMin+"/"+prixMax);
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
	findProducts(db,search, function(ProductSearch){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Content-Type','application/json');
		var json = JSON.stringify(ProductSearch);
		res.end(json);
})
});

  app.get('/panier/ids/',function(req,res){
			var produitsAafficher = req.params.type;
			console.log("app get : affichage des produits du panier");
			var search = {};
			affichePanier(db,search, function(ProductSearch){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('Content-Type','application/json');
				var json = JSON.stringify(ProductSearch);
				res.end(json);
  			})
	});

	app.get('/panier/retire/:id',function(req,res){
	var idAChercher = req.params.id;
	console.log("app get : retrait produit du panier , id="+idAChercher);
	var search = {"id": idAChercher};
	var search2 = {};
	retirePanier(db,search,affichePanier,function(ProductSearch){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('Content-Type','application/json');
				var json = JSON.stringify(ProductSearch);
				res.end(json);
  			});
	
});

	app.get('/products/ajout/:id',function(req,res){
	var idAChercher = req.params.id;
  console.log("app get : ajout d'un produit au panier , id="+idAChercher);
	var search = {"id" : idAChercher};
	var search2 = {};
	ajoutPanier(db,search, affichePanier,function(ProductSearch){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('Content-Type','application/json');
				var json = JSON.stringify(ProductSearch);
				res.end(json);
  			});
});

app.get('/panier/augmenter/:id',function(req,res){
	var idAChercher = req.params.id;
  console.log("app get : augmentation quantite du produit id="+idAChercher);
	var search = {"id" : idAChercher};
	var search2 = {};
	augmenterQuantite(db,search,affichePanier,function(ProductSearch){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('Content-Type','application/json');
				var json = JSON.stringify(ProductSearch);
				res.end(json);
  			});
});

app.get('/panier/reduire/:id',function(req,res){
	var idAChercher = req.params.id;
  console.log("app get: reduction quantite du produit id="+idAChercher);
	var search = {"id" : idAChercher};
	var search2 = {};
	reduireQuantite(db,search, affichePanier,retirePanier,function(ProductSearch){
				res.setHeader('Access-Control-Allow-Origin','*');
				res.setHeader('Content-Type','application/json');
				var json = JSON.stringify(ProductSearch);
				res.end(json);
  			});
});

});

app.listen(7040);
