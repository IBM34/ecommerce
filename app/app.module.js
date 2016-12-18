"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_module_1 = require('./recherche/app.module');
var app_module_2 = require('./panier/app.module');
var app_routing_1 = require('./recherche/app.routing');
var app_routing_2 = require('./panier/app.routing');
var app_routing_3 = require('./app.routing');
var Principal_component_1 = require('./Principal.component');
var ModulePrincipal = (function () {
    function ModulePrincipal() {
    }
    ModulePrincipal = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_module_1.RechercheModule, app_module_2.PanierModule, app_routing_3.routing, app_routing_1.routingRecherche, app_routing_2.routingPanier],
            declarations: [Principal_component_1.PrincipalComponent],
            bootstrap: [Principal_component_1.PrincipalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ModulePrincipal);
    return ModulePrincipal;
}());
exports.ModulePrincipal = ModulePrincipal;
//# sourceMappingURL=app.module.js.map