"use strict";
var router_1 = require('@angular/router');
var AffichePanier_component_1 = require('./AffichePanier.component');
var RetirePanier_component_1 = require('./RetirePanier.component');
var AugmenterQuantite_component_1 = require('./AugmenterQuantite.component');
var ReduireQuantite_component_1 = require('./ReduireQuantite.component');
var appRoutes = [
    { path: 'AffichePanier', component: AffichePanier_component_1.AffichePanierComponent },
    { path: 'retirerPanier/:id', component: RetirePanier_component_1.RetirePanierComponent },
    { path: 'augmenterQuant/:id', component: AugmenterQuantite_component_1.AugmenterQuantiteComponent },
    { path: 'reduireQuant/:id', component: ReduireQuantite_component_1.ReduireQuantiteComponent }
];
exports.appRoutingProviders = [];
exports.routingPanier = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=app.routing.js.map