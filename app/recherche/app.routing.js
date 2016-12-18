"use strict";
var router_1 = require('@angular/router');
var RechercheMarques_component_1 = require('./RechercheMarques.component');
var RechercheTypes_component_1 = require('./RechercheTypes.component');
var RechercheParMarque_component_1 = require('./RechercheParMarque.component');
var RechercheParType_component_1 = require('./RechercheParType.component');
var RechercheParMarquePop_component_1 = require('./RechercheParMarquePop.component');
var AjoutAuPanier_component_1 = require('./AjoutAuPanier.component');
var appRoutes = [
    { path: 'rechercheMarques', component: RechercheMarques_component_1.RechercheMarquesComponent },
    { path: 'rechercheTypes', component: RechercheTypes_component_1.RechercheTypesComponent },
    { path: 'rechercheParMarque/:marque', component: RechercheParMarque_component_1.RechercheParMarqueComponent },
    { path: 'rechercheParType/:type', component: RechercheParType_component_1.RechercheParTypeComponent },
    { path: 'parMarquePrix/:marque/:prixmin/:prixmax', component: RechercheParMarquePop_component_1.RechercheParMarquePopComponent },
    { path: 'ajoutPanier/:id', component: AjoutAuPanier_component_1.AjoutAuPanierComponent }
];
exports.appRoutingProviders = [];
exports.routingRecherche = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=app.routing.js.map