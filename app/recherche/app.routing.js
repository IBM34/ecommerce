"use strict";
var router_1 = require('@angular/router');
var AjoutAuPanier_component_1 = require('./AjoutAuPanier.component');
var Recherche_component_1 = require('./Recherche.component');
var appRoutes = [
    { path: 'ajoutPanier/:id', component: AjoutAuPanier_component_1.AjoutAuPanierComponent },
    { path: 'recherche/:nom/:marque/:type/:prixmin/:prixmax', component: Recherche_component_1.RechercheComponent }
];
exports.appRoutingProviders = [];
exports.routingRecherche = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=app.routing.js.map