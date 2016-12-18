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
var app_routing_1 = require('./app.routing');
var Affiche_service_1 = require('./Affiche.service');
var Menu_component_1 = require('./Menu.component');
var AffichePanier_component_1 = require('./AffichePanier.component');
var RetirePanier_component_1 = require('./RetirePanier.component');
var PanierModule = (function () {
    function PanierModule() {
    }
    PanierModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routingPanier],
            declarations: [Menu_component_1.MenuComponent, AffichePanier_component_1.AffichePanierComponent, RetirePanier_component_1.RetirePanierComponent],
            providers: [Affiche_service_1.AfficheService],
            bootstrap: [Menu_component_1.MenuComponent],
            exports: [Menu_component_1.MenuComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PanierModule);
    return PanierModule;
}());
exports.PanierModule = PanierModule;
//# sourceMappingURL=app.module.js.map