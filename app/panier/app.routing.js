"use strict";
var router_1 = require('@angular/router');
var AffichePanier_component_1 = require('./AffichePanier.component');
var RetirePanier_component_1 = require('./RetirePanier.component');
var appRoutes = [
    { path: 'AffichePanier', component: AffichePanier_component_1.AffichePanierComponent },
    { path: 'retirerPanier/:id', component: RetirePanier_component_1.RetirePanierComponent }
];
exports.appRoutingProviders = [];
exports.routingPanier = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=app.routing.js.map