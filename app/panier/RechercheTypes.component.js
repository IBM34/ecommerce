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
var Recherche_service_1 = require('./Recherche.service');
var RechercheTypesComponent = (function () {
    function RechercheTypesComponent(recherche) {
        this.recherche = recherche;
    }
    RechercheTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recherche.getJSON("types")
            .subscribe(function (res) { return _this.items = res; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    RechercheTypesComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/rechercheTypes.html',
        }), 
        __metadata('design:paramtypes', [Recherche_service_1.RechercheService])
    ], RechercheTypesComponent);
    return RechercheTypesComponent;
}());
exports.RechercheTypesComponent = RechercheTypesComponent;
//# sourceMappingURL=RechercheTypes.component.js.map