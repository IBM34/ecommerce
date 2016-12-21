"use strict";
var router_1 = require('@angular/router');
var Menu_component_1 = require('./recherche/Menu.component');
var AffichePanier_component_1 = require('./panier/AffichePanier.component');
var appRoutes = [
    { path: 'Recherche', component: Menu_component_1.MenuRechercheComponent },
    { path: 'Panier', component: AffichePanier_component_1.AffichePanierComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map