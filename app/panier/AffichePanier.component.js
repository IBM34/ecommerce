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
var Affiche_service_1 = require('./Affiche.service');
var AffichePanierComponent = (function () {
    function AffichePanierComponent(recherche) {
        this.recherche = recherche;
        this.titre = 'Votre Panier';
        this.total = 0;
    }
    AffichePanierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recherche.getJSON("ids")
            .subscribe(function (res) { return _this.items = res; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    AffichePanierComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/AffichePanier.html',
            styleUrls: ['styles/menu.css']
        }), 
        __metadata('design:paramtypes', [Affiche_service_1.AfficheService])
    ], AffichePanierComponent);
    return AffichePanierComponent;
}());
exports.AffichePanierComponent = AffichePanierComponent;
//# sourceMappingURL=AffichePanier.component.js.map