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
var router_1 = require('@angular/router');
var Affiche_service_1 = require('../panier/Affiche.service');
var AjoutAuPanierComponent = (function () {
    function AjoutAuPanierComponent(recherche, route) {
        this.recherche = recherche;
        this.route = route;
    }
    AjoutAuPanierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.recherche.getJSON("ajout/" + params['id'])
                .subscribe(function (res) { return _this.items = res; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        });
    };
    AjoutAuPanierComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: 'templates/AffichePanier.html',
            styleUrls: ['styles/menu.css']
        }), 
        __metadata('design:paramtypes', [Affiche_service_1.AfficheService, router_1.ActivatedRoute])
    ], AjoutAuPanierComponent);
    return AjoutAuPanierComponent;
}());
exports.AjoutAuPanierComponent = AjoutAuPanierComponent;
//# sourceMappingURL=AjoutAuPanier.component.js.map